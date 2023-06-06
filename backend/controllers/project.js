const sqlite3 = require('sqlite3').verbose();
const multer = require('multer');

const db = new sqlite3.Database('database.sqlite');
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS projects (id INTEGER PRIMARY KEY AUTOINCREMENT, imgUrl BLOB, title VARCHAR(255), description VARCHAR(255), link VARCHAR(255))');
});

exports.getAllProjects = (req, res, next) => {
    db.all('SELECT * FROM projects', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des projets' });
    } else {
      res.json(rows);
    }
  });
};

exports.createProject = (req, res, next) => {
    const { title, description, link } = req.body;
    const imgUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`; // Obtenez le nom du fichier téléchargé

   db.run('INSERT INTO projects (imgUrl, title, description, link) VALUES (?, ?, ?, ?)',
    [imgUrl, title, description, link],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Une erreur est survenue lors de la création du projet' });
      } else {
        res.json({ message: 'Projet créé avec succès' });
      }
    });
  }
;

  
