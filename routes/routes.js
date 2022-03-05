const path = require('path');
const pool = require('../data/config');
const router = app => {
  // Display welcome message on the root
  app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../frontend/html/LandingPage.html'));
  });

  // Display all characters
  app.get('/api/characters/', (request, response) => {
    pool.query('SELECT * FROM characters', (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Display a single character by ID
  app.get('/api/characters/:id', (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM characters WHERE id = ?', id, (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Add a new character
  app.post('/api/characters', (request, response) => {
    pool.query('INSERT INTO characters SET ?', request.body, (error, result) => {
      if (error) throw error;

      response.status(201).send(`Character added with ID: ${result.insertId}`);
    });
  });

  // Update an existing character
  app.put('/api/characters/:id', (request, response) => {
    const id = request.params.id;

    pool.query('UPDATE characters SET ? WHERE id = ?', [request.body, id], (error, result) => {
      if (error) throw error;

      response.send('Character updated successfully.');
    });
  });

  // Delete a character
  app.delete('/api/characters/:id', (request, response) => {
    const id = request.params.id;

    pool.query('DELETE FROM characters WHERE id = ?', id, (error, result) => {
      if (error) throw error;
      response.send('Character deleted.');
    });
  });
};

// Export the router
module.exports = router;
