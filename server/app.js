const { db_host, db_user, db_pwd, db_name } = require('./config');
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const pool = mysql.createPool({
  host: db_host,
  user: db_user,
  password: db_pwd,
  database: db_name
});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/login', (req, res) => {
  const { username, password } = req.query;

  pool.getConnection((err, connection) => {
    if (err) {
      return res.status(500).send({ error: err });
    }

    const query = 'SELECT uid, username, daily_intake FROM user WHERE username = ? AND password = ?';
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

app.post('/api/setIntake', (req, res) => {
  console.log("Received request to set intake for user " + req.body.uid + " to " + req.body.amount);
  const { uid, amount } = req.body;
    
  pool.getConnection((err, connection) => {
    if (err) {
      return res.status(500).send({ error: err });
    }

    const query = 'UPDATE user SET daily_intake = ? WHERE uid= ?';

    connection.query(query, [amount, uid], (err, rows) => {
      connection.release();

      if (err) {
        console.log(err);
        return res.status(500).send({ error: err });
      }

      res.send({ data: rows[0] });
    }); // added closing parenthesis
  });
});


      

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});