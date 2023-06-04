import './index.css';
import { Link } from 'react-scroll';
import Button from '../../components/button';

function About() {
    return (
        <section id='about' className='about'>
            <div className='about-container'>
                <h2 className='about-title'>
                    <span className='about-title-first'>A propos de moi</span>
                    <span className='about-title-sec'>Vous trouverez ici plus d'informations sur moi et mon parcours.</span>
                </h2>
                <div className='about-content'>
                    <div className='about-content-me'>
                        <h3 className='about-content-me-title'>Apprenez à me connaître</h3>
                        <p>
                            Passionnée par le <strong>développement web</strong>, je me suis formée au cours des dernière années, en autodidacte. J'ai pu mettre à profit ce savoir faire afin d'organiser la refonte intégrale du site web <strong>Prestashop</strong> de l'entreprise où je travaillais.
                        </p>
                        <p>
                            Suite à des évènements personnels, j'ai remis en question mon avenir et souhaité me former réellement au métier de développeur web. J'ai donc entamé les démarches d'une <strong>reconversion professionnelle</strong>.
                        </p>
                        <p>
                            Je suis désormais titulaire d'un <strong>titre RNCP de niveau V en tant que développeur web</strong> et ouverte aux propositions de collaboration. Si vous avez une opportunité qui correspond à mes compétences et expériences, n'hésitez pas à me <strong>contacter</strong>.
                        </p>
                    </div>
                    <div className='about-content-exp'>
                        <h3 className='about-content-exp-title'>Mon parcours</h3>
                        <h4>2022 - 2023 : Formation Développeur Web</h4>
                        <span className='exp-location'>OpenClassRooms</span>
                        <ul>
                            <li>Intégrer du contenu et implémenter une interface responsive avec HTML et CSS</li>
                            <li>Gestion de projet avec une méthode agile</li>
                            <li>Optimisation des perfomances et debug d'un site web</li>
                            <li>Développement web avec JavaScript</li>
                            <li>Initialiser une application avec Create React App</li>
                            <li>Développer des éléments de l'interface d'un site web grâce à React</li>
                            <li>Configurer la navigation entre les pages de l'application avec React Router</li>
                            <li>Développement back-end avec NodeJs</li>
                            <li>Implémenter un modèle logique de données conformément à la réglementation</li>
                            <li>Mettre en oeuvre des opérations CRUD de manière sécurisée</li>
                            <li>Stocker des données de manière sécurisée</li>
                        </ul>
                        <h4>2017 - 2022 : Assistante administrative et commerciale</h4>
                        <span className='exp-location'>Abel Franklin</span>
                        <ul>
                            <li>Migration vers une version plus récente de Prestashop</li>
                            <li>Refonte intégrale du site web</li>
                            <li>Optimisation SEO</li>
                        </ul>
                    </div>
                </div>
                            <Button
                className={'invers-button'}
                linkButton={'contact'}
                contentButton={'Contactez-moi'}
            />
            </div>

        </section>
    )
}

export default About