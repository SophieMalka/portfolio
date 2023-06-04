import './index.css';
import Background from '../../components/background';
import Button from '../../components/button';

function Admin() {
    return (
        <section id='admin'>
            <Background />
            <div className='admin-connect'>
                <h1 className='admin-title'> Connexion</h1>
                <form>
                    <label>Adresse email</label>
                    <input></input>
                    <label>Mot de passe</label>
                    <input></input>
                    <button type='submit'>Se connecter</button>
                </form>
            </div>
        </section>
    )
};

export default Admin