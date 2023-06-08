import './index.css';
import Background from '../../components/background';

function Error(props) {
    const goBackAdmin = () => {
        window.location.replace('/admin2103');
    };

    const goBackHome = () => {
        window.location.replace('/');
    };

    if (props.page === 'unauthorized') {
        return (
            <section className='unauthorized'>
                <Background />
                <div className='error-container'>
                    <h1 className='error-title'>Connexion non autorisée</h1>
                    <button className='error-button-back' onClick={goBackAdmin}>Revenir à la page d'accueil</button>
                </div>
            </section>
        );
    } else {
        return (
            <section className='404'>
                <Background />
                <div className='error-container'>
                    <h1 className='error-title'>404 : La page n'existe pas.</h1>
                    <button className='error-button-back' onClick={goBackHome}>Revenir à la page d'accueil</button>
                </div>
            </section>
        )
    }
};

export default Error