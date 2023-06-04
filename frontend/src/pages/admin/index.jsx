import './index.css';
import Background from '../../components/background';
import { API_ROUTES, APP_ROUTES } from '../../utils/constants';

function Admin() {
    return (
        <section id='admin'>
            <Background />
            <div className='admin-connect'>
                <h1 className='admin-title'> Connexion</h1>
                <form className='form-connect' action={`${API_ROUTES.LOGIN}`} method='POST'>
                    <label htmlFor='email'>Adresse email</label>
                    <input type='email' id="email" name='email' required></input>
                    <label htmlFor='password'>Mot de passe</label>
                    <input type='password' id='password' name='password' required></input>
                    <button type='submit'>Se connecter</button>
                </form>
            </div>
        </section>
    )
};

export default Admin