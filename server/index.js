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
  const sql = 'INSERT INTO `users`(`email`) VALUES (?)';
  const params = [
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

app.get('/api/get_news', (req, res) => {
  const sql = 'SELECT * FROM news';

  db.query(sql, (err, result) => {
    if (err) res.status(500).json({ message: 'Error fetching news' });
    return res.status(200).json(result);
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
