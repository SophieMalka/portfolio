const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.sqlite');
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT)');
});

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  
  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).send('Une erreur est survenue lors de la connexion.');
    } else if (row) {
      // Connexion réussie
      res.status(200).send('Connexion réussie');
    } else {
      // Identifiants invalides
      res.status(401).send('Identifiants invalides');
    }
  });
};