// Install necessary dependencies
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');
const readme = require('readmeio');
const port = 3000;

// Configure Express to parse json and urls
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Configure app to serve static files out of a directory
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(cors({
  origin: '*'
}));

routes(app);

// Start server on port 3000
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Prison Break API 🚨 is listening on port ${server.address().port}`);
});
