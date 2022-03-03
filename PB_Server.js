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
