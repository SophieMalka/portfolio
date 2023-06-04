import './index.css';
import Background from '../../components/background';
import Button from '../../components/button';

function Admin() {
    return (
        <section id='admin'>
            <Background />
            <div className='admin-connect'>
                <h1 className='admin-title'> Connexion</h1>
                <form className='form-connect'>
                    <label for='email'>Adresse email</label>
                    <input type='email'></input>
                    <label for='password'>Mot de passe</label>
                    <input type='password'></input>
                    <button type='submit'>Se connecter</button>
                </form>
            </div>
        </section>
    )
};

export default Admin