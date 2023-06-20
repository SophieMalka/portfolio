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
  const imgUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename.split('.')[0]}optimized.webp`;

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
  let imgUrl = null;
  let imgData = null;

  if (req.file) {
    imgData = fs.readFileSync(req.file.path);
    imgUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename.split('.')[0]}optimized.webp`;
  }

  // Vérifier si des champs ont été modifiés
  if (!title && !description && !link && !imgUrl) {
    res.status(400).json({ error: 'Aucun champ modifié' });
    return;
  }

  // Construire la requête SQL de mise à jour en fonction des champs modifiés
  let updateQuery = 'UPDATE projects SET ';
  let params = [];

  if (title) {
    updateQuery += 'title = ?, ';
    params.push(title);
  }

  if (description) {
    updateQuery += 'description = ?, ';
    params.push(description);
  }

  if (link) {
    updateQuery += 'link = ?, ';
    params.push(link);
  }

  if (imgUrl) {
    updateQuery += 'imgUrl = ?, ';
    params.push(imgUrl);
  }

  // Supprimer la virgule et l'espace finaux de la requête SQL
  updateQuery = updateQuery.slice(0, -2);

  // Ajouter la clause WHERE pour identifier le projet à mettre à jour
  updateQuery += ' WHERE id = ?';
  params.push(projectId);

  db.get('SELECT imgUrl FROM projects WHERE id = ?', projectId, (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Une erreur est survenue lors de la récupération du projet' });
    } else if (row) {
      const oldImgUrl = row.imgUrl;

      db.run(updateQuery, params, function (err) {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour du projet' });
        } else if (this.changes === 0) {
          res.status(404).json({ error: 'Projet non trouvé' });
        } else {
          if (imgUrl && oldImgUrl) {
            // Supprimer l'ancienne image du projet
            const oldFileName = oldImgUrl.split('/').pop();
            const oldFilePath = `images/${oldFileName}`;

            fs.unlink(oldFilePath, (err) => {
              if (err) {
                console.error(err);
                res.status(500).json({ error: 'Une erreur est survenue lors de la suppression de l\'ancien fichier' });
              } else {
                res.json({ message: 'Projet mis à jour avec succès' });
              }
            });
          } else {
            res.json({ message: 'Projet mis à jour avec succès' });
          }
        }
      });
    } else {
      res.status(404).json({ error: 'Projet non trouvé' });
    }
  });
};
