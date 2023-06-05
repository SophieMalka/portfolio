const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('database.sqlite');
db.serialize(() => {
  db.run('CREATE TABLE projects (id INTEGER PRIMARY KEY AUTOINCREMENT, imgUrl VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, link VARCHAR(255) NOT NULL)');
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
    const { imgUrl, title, description, link } = req.body;

  db.run('INSERT INTO projects (imgUrl, title, description, link) VALUES (?, ?, ?, ?)', [imgUrl, title, description, link], function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Une erreur est survenue lors de l\'ajout du projet' });
    } else {
      res.json({ message: 'Le projet a été ajouté avec succès', projectId: this.lastID });
    }
  });
};