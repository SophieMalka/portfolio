const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const db = new sqlite3.Database('database.sqlite');
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT)');
});

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).send('Une erreur est survenue lors de la connexion.');
    } else if (row) {
      bcrypt.compare(password, row.password, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Une erreur est survenue lors de la connexion.');
        } else if (result) {
          const token = jwt.sign({ userId: row.id }, process.env.TOKEN_SECRET, { expiresIn: '4h' });
          return res.status(200).json({ token });
        } else {
          res.status(401).json({ message: 'Identifiant et/ou mot de passe incorrect' });
        }
      });
    } else {
      res.status(401).json({ message: 'Identifiant et/ou mot de passe incorrect' });
    }
  });
};

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).send('Une erreur est survenue lors de la création du compte.');
    } else if (row) {
      res.status(409).json({ message: 'Cet email est déjà utilisé.' });
    } else {
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          console.error(err);
          res.status(500).send('Une erreur est survenue lors de la création du compte.');
        } else {
          db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], function (err) {
            if (err) {
              console.error(err);
              res.status(500).send('Une erreur est survenue lors de la création du compte.');
            } else {
              const token = jwt.sign({ userId: this.lastID }, process.env.TOKEN_SECRET, { expiresIn: '4h' });
              res.status(201).json({ token });
            }
          });
        }
      });
    }
  });
};
