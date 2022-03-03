const path = require('path/posix');
const pool = require('../data/config');
const router = app => {
  // Display welcome message on the root
  app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../frontend/html/LandingPage.html'));
  });

  // Display all users
  app.get('/characters/', (request, response) => {
    pool.query('SELECT * FROM characters', (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Display a single user by ID
  app.get('/characters/:id', (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM characters WHERE id = ?', id, (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Add a new user
  app.post('/characters', (request, response) => {
    pool.query('INSERT INTO characters SET ?', request.body, (error, result) => {
      if (error) throw error;

      response.status(201).send(`Character added with ID: ${result.insertId}`);
    });
  });

  // Update an existing user
  app.put('/users/:id', (request, response) => {
    const id = request.params.id;

    pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
      if (error) throw error;

      response.send('User updated successfully.');
    });
  });

  // Delete a user
  app.delete('/users/:id', (request, response) => {
    const id = request.params.id;

    pool.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
      if (error) throw error;
      response.send('User deleted.');
    });
  });
};

// Export the router
module.exports = router;
