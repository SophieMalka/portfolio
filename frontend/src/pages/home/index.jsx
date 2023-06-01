import './index.css';
import Stack from '../../components/stack';
import Background from '../../components/background';
import Button from '../../components/button';


function Home() {
    return (
        <section id='home' className='home'>
            <Background />
            <div className='home-content'>
                <h1 className='home-title'>Bonjour, je suis Sophie Malka</h1>
                <div className='home-info'>
                    <p>Développeuse web axée front-end avec des connaissances en back-end.<br />Passionnée et de nature autonome, je possède une formation autodidacte, complétée par un titre RNCP de niveau V.</p>
                </div>
                <Stack />
                <Button
                    linkButton={'projects'}
                    contentButton={'Voir mes réalisations'}
                />
            </div>
        </section>
    )
};

export default Home