
const { response } = require('express');
const { request } = require('http');
const path = require('path');
const pool = require('../backend/config');

const router = app => {

  // Display welcome message on the root
  app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../frontend/html/LandingPage.html'));
  });
}

  // Display all endpoints
  app.get('/api/', (request, response) => {
    response.sendFile(path.join(__dirname, '../frontend/html/Endpoints.html'));
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

  // Display all episodes
  app.get('/api/episodes/', (request, response) => {
    pool.query('SELECT * FROM episodes', (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Display a single episode by ID
  app.get('/api/episodes/:id', (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM episodes WHERE id = ?', id, (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Display all locations
  app.get('/api/locations', (request, response) => {
    pool.query('SELECT * FROM locations', (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Display a single location by ID
  app.get('/api/locations/:id', (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM locations WHERE id = ?', id, (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Display all codes
  app.get('/api/codes/', (request, response) => {
    pool.query('SELECT * FROM codes', (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

  // Display a single code by ID
  app.get('/api/codes/:id', (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM codes WHERE id = ?', id, (error, result) => {
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

  // Add a new episode
  app.post('/api/episodes', (request, response) => {
    pool.query('INSERT INTO episodes SET ?', request.body, (error, result) => {
      if (error) throw error;

      response.status(201).send(`Episode added with ID: ${result.insertId}`);
    });
  });

  // Add a new location
  app.post('/api/locations', (request, response) => {
    pool.query('INSERT INTO locations SET ?', request.body, (error, result) => {
      if (error) throw error;

      response.status(201).send(`Location added with ID: ${result.insertId}`);
    });
  });

  // Add a new code
  app.post('/api/codes', (request, response) => {
    pool.query('INSERT INTO codes SET ?', request.body, (error, result) => {
      if (error) throw error;

      response.status(201).send(`Code added with ID: ${result.insertId}`);
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

  // Update an existing episode
  app.put('/api/episodes/:id', (request, response) => {
    const id = request.params.id;

    pool.query('UPDATE episodes SET ? WHERE id =?', [request.body, id], (error, result) => {
      if (error) throw error;

      response.send('Episode updated successfully.');
    });
  });

  // Update an existing location
  app.put('/api/locations/:id', (request, response) => {
    const id = request.params.id;

    pool.query('UPDATE locations SET ? WHERE id =?', [request.body, id], (error, result) => {
      if (error) throw error;

      response.send('Location updated successfully.');
    });
  });

   // Update an existing code
  app.put('/api/codes/:id', (request, response) => {
    const id = request.params.id;

    pool.query('UPDATE codes SET ? WHERE id =?', [request.body, id], (error, result) => {
      if (error) throw error;

      response.send('Code updated successfully.');
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

// Delete an episode
app.delete('/api/episodes/:id', (request, response) => {
  const id = request.params.id;

  pool.query('DELETE FROM episodes WHERE id = ?', id, (error, result) => {
    if (error) throw error;
    response.send('Episode deleted.');
  });
});

// Delete a location
app.delete('/api/locations/:id', (request, response) => {
  const id = request.params.id;

  pool.query('DELETE FROM locations WHERE id = ?', id, (error, result) => {
    if (error) throw error;
    response.send('Location deleted.');
  });
});

// Delete a code
app.delete('/api/codes/:id', (request, response) => {
  const id = request.params.id;

  pool.query('DELETE FROM codes WHERE id = ?', id, (error, result) => {
    if (error) throw error;
    response.send('Code deleted.');
  });
});

// Export the router
module.exports = router;
