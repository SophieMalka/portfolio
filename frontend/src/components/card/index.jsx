import './index.css';

function Card({image, title, description, link}) {
    return (
        <div className='card-project'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{link}</span>
        </div>
    )
};

export default Card