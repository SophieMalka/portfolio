import './index.css';
import { Link } from 'react-router-dom';

function Card({image, title, description, link, titleLink}) {
    return (
        <div className='card-project'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={link} className='button-card'>{titleLink}</Link>
        </div>
    )
};

export default Card