import './index.css';
import Background from '../../components/background';
import { API_ROUTES } from '../../utils/constants';

function Admin() {
  const redirect = async (event) => {
    event.preventDefault();
  
    const loginForm = document.querySelector('form');
    const formData = new FormData(loginForm); // Obtenir les données du formulaire
  
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())), // Convertir les données du formulaire en JSON
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}` // Inclure le token JWT dans l'en-tête
        }
      });

      if (response.status === 200) {
        const { token } = await response.json(); // Récupérer le token de la réponse
        sessionStorage.setItem('token', token);
        window.location.replace('/admin2103/projects');
      } else {
        loginForm.email.value = '';
        loginForm.password.value = '';
        alert("Erreur dans l'identifiant ou le mot de passe");
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la connexion :", error);
    }
  };

  return (
    <section id="admin">
      <Background />
      <div className="admin-connect">
        <h1 className="admin-title"> Connexion</h1>
        <form className="form-connect" action={API_ROUTES.LOGIN} method="POST">
          <label className='label-form-connect' htmlFor="email">Adresse email</label>
          <input className='input-form-connect' type="email" id="email" name="email" required />
          <label className='label-form-connect' htmlFor="password">Mot de passe</label>
          <input className='input-form-connect' type="password" id="password" name="password" required />
          <button className='button-form-connect' type="submit" onClick={redirect}>
            Se connecter
          </button>
        </form>
      </div>
    </section>
  );
}

export default Admin;
