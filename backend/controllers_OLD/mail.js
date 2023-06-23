const nodemailer = require('nodemailer');
const sqlite3 = require('sqlite3');

exports.sendEmail = (req, res) => {
  const { name, email, tel, object, message } = req.body;
  console.log(req.body);

  const db = new sqlite3.Database('database.sqlite');
  db.serialize(() => {
    db.run(
      'CREATE TABLE IF NOT EXISTS contacts (name TEXT, email TEXT, tel TEXT, object TEXT, message TEXT)'
    );

    const stmt = db.prepare(
      'INSERT INTO contacts (name, email, tel, object, message) VALUES (?, ?, ?, ?, ?)'
    );
    stmt.run(name, email, tel, object, message);
    stmt.finalize();
  });

  // Configuration de Nodemailer pour envoyer le mail
  const transporter = nodemailer.createTransport({
    host: 'node197-eu.n0c.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL,
      pass: process.env.MP_MAIL,
    },
  });

  const mailOptions = {
    from: email,
    to: 'contact@sophiemalka.fr',
    subject: object,
    text: `Nom et prénom : ${name}\nTéléphone : ${tel}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Erreur lors de l'envoi du courrier électronique");
    } else {
      console.log('Courrier électronique envoyé : ' + info.response);
      res.send('Courrier électronique envoyé avec succès');
    }
  });
};
