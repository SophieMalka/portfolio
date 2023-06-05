const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');

const db = new sqlite3.Database('database.sqlite');
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT)');
});

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body)

  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).send('Une erreur est survenue lors de la connexion.');
    } else if (row) {
      if (password === row.password) {
        // Connexion réussie
        return res.status(200).json({
          token: jwt.sign({ userId: row.id }, process.env.TOKEN_SECRET, { expiresIn: '4h' })
        });
      } else {
        // Mot de passe incorrect
        res.status(401).json({ message: 'Identifiant et/ou mot de passe incorrect' });
      }
    } else {
      // Identifiants invalides
      res.status(401).json({ message: 'Identifiant et/ou mot de passe incorrect' });
    }
  });
};
