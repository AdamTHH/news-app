const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'travelappdb',
});

app.post('/api/add_user', (req, res) => {
  sql = 'INSERT INTO `users`(`email`) VALUES (?)';
  params = [
    req.body.email,
  ];

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({ message: 'User registered successfully' });
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
