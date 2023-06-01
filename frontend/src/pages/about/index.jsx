import './index.css';
import { Link } from 'react-scroll';

function About() {
    return (
        <section id='about' className='about'>
            <div className='about-container'>
                <h2 className='about-title'>
                    <span className='about-title-first'>A propos de moi</span>
                    <span className='about-title-sec'>Vous trouverez ici plus d'informations sur moi, mes expériences et mes compétences actuelles.</span>
                </h2>
                <div className='about-content'>
                    <div className='about-content-exp'>
                        <h3 className='about-content-exp-title'>Apprenez à me connaître</h3>
                        <p>
                            Passionnée par le <strong>développement web</strong>, je me suis formée au cours des dernière années, en autodidacte. J'ai pu mettre à profit ce savoir faire afin d'organiser la refonte intégrale du site web <strong>Prestashop</strong> de l'entreprise où je travaillais.
                        </p>
                        <p>
                            Suite à plus de six mois d'arrêts en raison d'un accident, j'ai remis en question mon avenir et souhaité me former réellement au métier de développeur web. J'ai donc entamé les démarches d'une <strong>reconversion professionnelle</strong>.
                        </p>
                        <p>
                            Je suis désormais titulaire d'un <strong>titre RNCP de niveau V en tant que développeur web</strong> et ouverte aux propositions de collaboration. Si vous avez une opportunité qui correspond à mes compétences et expériences, n'hésitez pas à me <strong>contacter</strong>.
                        </p>
                        <div className='home-button'>
                            <Link to='contact' smooth={true} duration={300} className='btn btn-bg'>Contact</Link>
                        </div>
                    </div>
                    <div className='about-content-skills'>
    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About