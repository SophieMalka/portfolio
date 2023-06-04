const sqlite3 = require('sqlite3').verbose();

exports.login = (req, res, next) => {
  const { nomUtilisateur, motDePasse } = req.body;

  // Connexion à la base de données SQLite
  const db = new sqlite3.Database('chemin_vers_votre_base_de_donnees.sqlite');

  // Exécution de la requête pour récupérer les informations de l'utilisateur
  const query = 'SELECT * FROM utilisateurs WHERE nom_utilisateur=? AND mot_de_passe=?';
  db.get(query, [nomUtilisateur, motDePasse], (err, utilisateur) => {
    // Fermeture de la base de données
    db.close();

    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'Erreur lors de l\'exécution de la requête' });
    }

    // Vérification si l'utilisateur existe dans la base de données
    if (utilisateur) {
      // L'utilisateur existe, retourner une réponse réussie
      return res.status(200).json({ message: 'Connexion réussie' });
    } else {
      // L'utilisateur n'existe pas, retourner une réponse d'échec
      return res.status(401).json({ message: 'Identifiants invalides' });
    }
  });
}