const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');
const readme = require('readmeio');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(cors({
  origin: '*'
}));

routes(app);

const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Prison Break API 🚨 is listening on port ${server.address().port}`);
});
