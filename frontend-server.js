// Simple HTTP server to serve frontend files
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const FRONTEND_DIR = path.join(__dirname, 'frontend');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Remove query string and decode URL
  let filePath = req.url.split('?')[0];
  
  // Default to index.html for root
  if (filePath === '/' || filePath === '/frontend' || filePath === '/frontend/') {
    filePath = '/index.html';
  }
  
  // Remove /frontend prefix if present
  if (filePath.startsWith('/frontend/')) {
    filePath = filePath.replace('/frontend', '');
  }
  
  // If no extension, try adding .html
  if (!path.extname(filePath)) {
    filePath = path.join(filePath, 'index.html');
  }

  const fullPath = path.join(FRONTEND_DIR, filePath);
  const ext = path.extname(fullPath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(fullPath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found, try index.html
        const indexPath = path.join(FRONTEND_DIR, 'index.html');
        fs.readFile(indexPath, (err, content) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - File Not Found</h1>', 'utf-8');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`, 'utf-8');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`🌐 Frontend server running on http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${FRONTEND_DIR}`);
  console.log(`🔗 Access at: http://localhost:${PORT}/frontend/index.html`);
  console.log(`   or: http://localhost:${PORT}/index.html`);
});

