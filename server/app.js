const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const pool = mysql.createPool({
    host: '192.168.0.29',
    user: 'admin_water_tracker',
    password: 'pw9vSE4MjWn3ifS4',
    database: 'water_tracker'
  });
  
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/login', (req, res) => {
    const { username, password } = req.query;
  
    pool.getConnection((err, connection) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
  
      const query = 'SELECT id, username FROM user WHERE username = ? AND password = ?';
      connection.query(query, [username, password], (err, rows) => {
        connection.release();
  
        if (err) {
          return res.status(500).send({ error: err });
        }
  
        if (rows.length === 0) {
          return res.status(401).send({ error: 'Invalid username or password' });
        }
  
        res.send({ data: rows[0] });
      });
    });
  });
  
  

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
