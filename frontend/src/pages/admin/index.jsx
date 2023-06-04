import './index.css';
import Background from '../../components/background';
import { API_ROUTES } from '../../utils/constants';

function Admin() {
  const redirect = async (event) => {
    event.preventDefault();
    const loginForm = document.querySelector('form');
    if (localStorage.getItem('token')) {
      window.location.replace('/admin2103/projects');
    } else {
      loginForm.email.value = '';
      loginForm.password.value = '';
      alert("Erreur dans l'identifiant ou le mot de passe");
    }
  };

  return (
    <section id="admin">
      <Background />
      <div className="admin-connect">
        <h1 className="admin-title"> Connexion</h1>
        <form className="form-connect" action={API_ROUTES.LOGIN} method="POST">
          <label htmlFor="email">Adresse email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" required />
          <button type="submit" onClick={redirect}>
            Se connecter
          </button>
        </form>
      </div>
    </section>
  );
}

export default Admin;
