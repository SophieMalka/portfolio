import './index.css';
import { Link } from 'react-router-dom';

function Card({ image, title, description, link, updateLink, deleteLink, page }) {
    if (page === "admin") {
        return (
            <div className='card-project'>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='list-button-card'>
                    <Link to={updateLink} className='button-card-update'>Modifier</Link>
                    <Link to={deleteLink} className='button-card-delete'>Supprimer</Link>
                </div>
            </div>
        );
    } else if (page === 'visit') {
        return (
            <div className='card-project'>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={link} className='button-card'>Lien du projet</Link>
            </div>
        );
    }
}

export default Card;
