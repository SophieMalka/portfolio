import './index.css';
import { Link } from 'react-router-dom';

function Card({image, title, description, link}) {
    return (
        <div className='card-project'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={link} className='button'>Lien du projet</Link>
        </div>
    )
};

export default Card