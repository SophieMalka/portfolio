const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

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
  const imgUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;

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
};

exports.getOneProject = (req, res, next) => {
  const projectId = req.params.id; // Récupère l'identifiant du projet depuis les paramètres de la requête

  db.get('SELECT * FROM projects WHERE id = ?', projectId, (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Une erreur est survenue lors de la récupération du projet' });
    } else if (row) {
      res.json(row);
    } else {
      res.status(404).json({ error: 'Projet non trouvé' });
    }
  });
};

exports.deleteProject = (req, res, next) => {
  const projectId = req.params.id;

  db.get('SELECT imgUrl FROM projects WHERE id = ?', projectId, (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Une erreur est survenue lors de la suppression du projet' });
    } else if (row) {
      const imgUrl = row.imgUrl;
      const fileName = imgUrl.split('/').pop();
      const filePath = `images/${fileName}`;

      db.run('DELETE FROM projects WHERE id = ?', projectId, (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Une erreur est survenue lors de la suppression du projet' });
        } else {
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error(err);
              res.status(500).json({ error: 'Une erreur est survenue lors de la suppression du fichier' });
            } else {
              res.json({ message: 'Projet supprimé avec succès' });
            }
          });
        }
      });
    } else {
      res.status(404).json({ error: 'Projet non trouvé' });
    }
  });
};

exports.updateProject = (req, res, next) => {
  const projectId = req.params.id;
  const { title, description, link } = req.body;

  db.get('SELECT imgUrl FROM projects WHERE id = ?', projectId, (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour du projet' });
    } else if (row) {
      const imgUrl = row.imgUrl;
      const fileName = imgUrl.split('/').pop();
      const filePath = `images/${fileName}`;

      db.run(
        'UPDATE projects SET title = ?, description = ?, link = ? WHERE id = ?',
        [title, description, link, projectId],
        (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour du projet' });
          } else {
            res.json({ message: 'Projet mis à jour avec succès' });
          }
        }
      );
    } else {
      res.status(404).json({ error: 'Projet non trouvé' });
    }
  });
};
