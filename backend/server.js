const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve static files from frontend directory in production
if (process.env.NODE_ENV === 'production' || !process.env.FRONTEND_SERVER) {
  app.use(express.static(path.join(__dirname, '..', 'frontend')));
  // Serve index.html for root route
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
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

app.get('/api/destinations/details', (req, res) => {
  const destination = req.query.destination || '';
  if (!destination) {
    return res.status(400).json({ error: 'Destination parameter is required' });
  }
  
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
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 API endpoints available:`);
  console.log(`   GET  /api/recipes`);
  console.log(`   POST /api/recipes`);
  console.log(`   POST /api/tour-details`);
  console.log(`   GET  /api/destinations/search?q=<query>`);
  console.log(`   GET  /api/destinations/details?destination=<name>`);
  console.log(`🔗 Frontend should be accessible at: http://localhost:8000/frontend/index.html`);
}); 