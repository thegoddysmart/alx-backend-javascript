const express = require('express');

// Create an instance of an Express app
const app = express();
const port = 1245;

// Define a route for the root (/) endpoint
app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

// start the server on port 1245
app.listen(port, () => {
});

// Export the app variable
module.exports = app;
