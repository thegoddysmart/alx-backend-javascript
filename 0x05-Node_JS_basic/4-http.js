const http = require('http');

const host = '127.0.0.1';
const port = 1245;

// Create an HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

// Listen on port
app.listen(port, host, () => {});

// Export the app variable
module.exports = app;
