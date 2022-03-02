const express = require('express');
const app = express();
const port = 3000;
app.get('/api/', (req, res) => {        
    res.send('List of API Routes...');
});
app.listen(port, () => console.log(`Prison break API 🚨 is listening on port ${port}!`));