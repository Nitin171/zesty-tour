const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize SQLite database
const dbPath = path.join(__dirname, 'db.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Create recipes table if it doesn't exist
const createTableQuery = `
CREATE TABLE IF NOT EXISTS recipes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT
);
`;
db.run(createTableQuery);

// Create tour_details table if it doesn't exist
const createTourTableQuery = `
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
);
`;
db.run(createTourTableQuery);

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

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 API endpoints available:`);
  console.log(`   GET  /api/recipes`);
  console.log(`   POST /api/recipes`);
  console.log(`   POST /api/tour-details`);
  console.log(`🔗 Frontend should be accessible at: http://localhost:8000/frontend/index.html`);
}); 