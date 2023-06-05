const sqlite3 = require('sqlite3').verbose();

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
  const imgUrl = `${req.protocol}://images/${req.body.imgUrl}`;
  const title = req.body.title;
  const description = req.body.description;
  const link = req.body.link;

  db.run('INSERT INTO projects (imgUrl, title, description, link) VALUES (?, ?, ?, ?)', [imgUrl, title, description, link], function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Une erreur est survenue lors de l\'ajout du projet' });
    } else {
      res.json({ message: 'Le projet a été ajouté avec succès', projectId: this.lastID });
    }
  });
};