const express = require('express');
const cors = require('cors');
const router = require('./routes');
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

app.use(api, router);

app.all("*", (req, res, next) => {
 next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);
const PORT = 3000;
app.listen(PORT, () => {
 console.log(`server running on port ${PORT}`);
});

module.exports = app;
/*
const app = express();
const port = 3000;
app.get('/api/', (req, res) => {
  res.send('List of API Routes...');
});
app.listen(port, () => console.log(`Prison break API 🚨 is listening on port ${port}!`));

app.get('/api/characters/', (req, res) => {
  res.send('List of characters...');
});
app.get('/api/episodes/', (req, res) => {
  res.send('List of episodes...');
});
app.get('/api/locations/', (req, res) => {
  res.send('List of locations...');
});
app.get('/api/codes/', (req, res) => {
  res.send('List of coded messages...');
});
*/