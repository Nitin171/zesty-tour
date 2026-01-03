const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve static files from frontend directory in production
if (process.env.NODE_ENV === 'production' || !process.env.FRONTEND_SERVER) {
  app.use(express.static(path.join(__dirname, '..', 'frontend')));
  // Serve login.html for root route (users must login first)
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'login.html'));
  });
}

// Initialize SQLite database
const dbPath = path.join(__dirname, 'db.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to SQLite database');
    
    // Initialize database tables after connection is established
    initializeDatabase();
  }
});

// Import comprehensive Indian destinations
const indianDestinations = require('./indian-destinations');
const popularDestinations = indianDestinations;

// Initialize database tables
function initializeDatabase() {
// Create recipes table if it doesn't exist
  db.run(`
CREATE TABLE IF NOT EXISTS recipes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT
    )
  `, (err) => {
    if (err) {
      console.error('Error creating recipes table:', err);
    }
  });

// Create tour_details table if it doesn't exist
  db.run(`
CREATE TABLE IF NOT EXISTS tour_details (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  start TEXT,
  end TEXT,
  pkg TEXT,
  age TEXT,
  prefs TEXT,
  budget INTEGER,
  modes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Error creating tour_details table:', err);
    }
  });

  // Create destinations table if it doesn't exist
  db.run(`
    CREATE TABLE IF NOT EXISTS destinations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      country TEXT DEFAULT 'India',
      category TEXT,
      description TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Error creating destinations table:', err);
    } else {
      // Populate destinations table if empty
      populateDestinations();
    }
  });

  // Create users table for authentication
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Error creating users table:', err);
    } else {
      console.log('Users table ready');
    }
  });
}

// Populate destinations table
function populateDestinations() {
  db.get('SELECT COUNT(*) as count FROM destinations', [], (err, row) => {
    if (err) {
      console.error('Error checking destinations:', err);
    } else if (row && row.count === 0) {
      console.log('Populating destinations table with', popularDestinations.length, 'destinations...');
      db.serialize(() => {
        db.run('BEGIN TRANSACTION');
        const insertStmt = db.prepare('INSERT INTO destinations (name, country, category, description) VALUES (?, ?, ?, ?)');
        
        let completed = 0;
        popularDestinations.forEach(dest => {
          insertStmt.run([dest.name, dest.country, dest.category, dest.description], (err) => {
            if (err) {
              console.error('Error inserting destination:', dest.name, err);
            }
            completed++;
            if (completed === popularDestinations.length) {
              insertStmt.finalize((err) => {
                if (err) {
                  console.error('Error finalizing insert statement:', err);
                } else {
                  db.run('COMMIT', (err) => {
                    if (err) {
                      console.error('Error committing transaction:', err);
                    } else {
                      console.log('✅ Successfully populated destinations table with', popularDestinations.length, 'destinations');
                    }
                  });
                }
              });
            }
          });
        });
      });
    } else if (row && row.count > 0) {
      console.log('Destinations table already has', row.count, 'entries.');
      // Option to update/refresh: Uncomment the lines below to clear and repopulate
      // db.run('DELETE FROM destinations', () => {
      //   console.log('Cleared existing destinations. Repopulating...');
      //   populateDestinations();
      // });
    }
  });
}

// Test endpoint
app.get('/api/recipes', (req, res) => {
  db.all('SELECT * FROM recipes', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Add new recipe
app.post('/api/recipes', (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  const insertQuery = 'INSERT INTO recipes (name, description) VALUES (?, ?)';
  db.run(insertQuery, [name, description], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: this.lastID, name, description });
    }
  });
});

// Add new tour details
app.post('/api/tour-details', (req, res) => {
  const { start, end, pkg, age, prefs, budget, modes } = req.body;
  const insertQuery = `INSERT INTO tour_details (start, end, pkg, age, prefs, budget, modes) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.run(
    insertQuery,
    [start, end, pkg, age, JSON.stringify(prefs), budget, JSON.stringify(modes)],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ id: this.lastID });
      }
    }
  );
});

// Get destination suggestions (autocomplete)
app.get('/api/destinations/search', (req, res) => {
  const query = req.query.q || '';
  if (!query || query.length < 1) {
    return res.json([]);
  }
  
  const searchQuery = `SELECT name, country, category, description FROM destinations 
    WHERE name LIKE ? OR description LIKE ? 
    ORDER BY 
      CASE WHEN name LIKE ? THEN 1 ELSE 2 END,
      name 
    LIMIT 10`;
  const searchTerm = `%${query}%`;
  const exactMatch = `${query}%`;
  
  db.all(searchQuery, [searchTerm, searchTerm, exactMatch], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Get destination details (attractions, hotels, restaurants, experiences)
const { getDestinationData, processDestinationData } = require('./destination-data');
const { fetchDestinationData: fetchRealPlacesData } = require('./places-service');

app.get('/api/destinations/details', async (req, res) => {
  const destination = req.query.destination || '';
  const useRealData = req.query.real === 'true' || process.env.USE_REAL_PLACES === 'true';
  
  if (!destination) {
    return res.status(400).json({ error: 'Destination parameter is required' });
  }
  
  try {
    // Try to fetch real data from APIs first if enabled
    if (useRealData) {
      console.log(`Fetching real places data for: ${destination}`);
      const realData = await fetchRealPlacesData(destination);
      
      // If we got real data, return it
      if (realData && (realData.attractions.length > 0 || realData.hotels.length > 0 || realData.restaurants.length > 0)) {
        console.log(`✅ Returning real API data for ${destination}`);
        return res.json(realData);
      } else {
        console.log(`⚠️ Real API returned no data, falling back to static data`);
      }
    }
    
    // Fallback to static data
    const data = getDestinationData(destination);
    if (!data) {
      return res.json({
        attractions: [],
        hotels: [],
        restaurants: [],
        experiences: [],
        message: 'No detailed data available for this destination'
      });
    }
    
    const processedData = processDestinationData(data);
    res.json(processedData);
  } catch (error) {
    console.error('Error fetching destination details:', error);
    
    // Fallback to static data on error
    const data = getDestinationData(destination);
    if (data) {
      const processedData = processDestinationData(data);
      return res.json(processedData);
    }
    
    res.status(500).json({
      error: 'Failed to fetch destination data',
      message: error.message
    });
  }
});

// Simple password hashing (for production, use bcrypt)
function hashPassword(password) {
  // Simple hash for demo - in production use bcrypt
  return Buffer.from(password).toString('base64');
}

// Authentication endpoints
// Signup
app.post('/api/auth/signup', (req, res) => {
  let { username, email, password, name } = req.body;
  
  // Trim whitespace from all fields
  username = username ? username.trim() : '';
  email = email ? email.trim() : '';
  password = password ? password.trim() : '';
  name = name ? name.trim() : '';
  
  if (!username || !email || !password || !name) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  const hashedPassword = hashPassword(password);

  db.get('SELECT * FROM users WHERE username = ? OR email = ?', [username, email], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    if (row) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    db.run(
      'INSERT INTO users (username, email, password, name) VALUES (?, ?, ?, ?)',
      [username, email, hashedPassword, name],
      function(err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        
        // Return user data (without password)
        res.status(201).json({
          user: {
            id: this.lastID,
            username,
            email,
            name
          },
          token: `token_${this.lastID}_${Date.now()}` // Simple token for demo
        });
      }
    );
  });
});

// Login
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Trim whitespace from username
  const trimmedUsername = username.trim();
  const trimmedPassword = password.trim();

  if (!trimmedUsername || !trimmedPassword) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const hashedPassword = hashPassword(trimmedPassword);

  // First check if user exists
  db.get('SELECT * FROM users WHERE username = ?', [trimmedUsername], (err, row) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error. Please try again.' });
    }
    
    if (!row) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Check password
    if (row.password !== hashedPassword) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Return user data (without password)
    res.json({
      user: {
        id: row.id,
        username: row.username,
        email: row.email,
        name: row.name
      },
      token: `token_${row.id}_${Date.now()}` // Simple token for demo
    });
  });
});

// Get current user (for session check)
app.get('/api/auth/me', (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  // Simple token validation - in production use JWT
  const userId = token.split('_')[1];
  db.get('SELECT id, username, email, name FROM users WHERE id = ?', [userId], (err, row) => {
    if (err || !row) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    res.json({ user: row });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 API endpoints available:`);
  console.log(`   GET  /api/recipes`);
  console.log(`   POST /api/recipes`);
  console.log(`   POST /api/tour-details`);
  console.log(`   GET  /api/destinations/search?q=<query>`);
  console.log(`   GET  /api/destinations/details?destination=<name>`);
  console.log(`   POST /api/auth/signup`);
  console.log(`   POST /api/auth/login`);
  console.log(`   GET  /api/auth/me`);
  console.log(`🔗 Frontend should be accessible at: http://localhost:8000/frontend/index.html`);
}); 