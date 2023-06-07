import './index.css';
import { Link } from 'react-router-dom';

function Card({ projectId, image, title, description, link, updateFunction, deleteFunction, page }) {
    if (page === "admin") {
        return (
            <div className='card-project-admin'>
                <div className='content-card-project'>
                    <img src={image} alt={title} />
                    <div className='desc-project'>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='list-button-card'>
                    <button id={projectId} className='button-card-update' onClick={updateFunction}>Modifier</button>
                    <button id={projectId} className='button-card-delete' onClick={deleteFunction}>Supprimer</button>
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
