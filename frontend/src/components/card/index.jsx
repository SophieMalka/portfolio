import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Card({ projectId, imgUrl, title, description, link, updateFunction, deleteFunction, page }) {
  const renderDescription = () => {
    return { __html: description };
  };

  if (page === "admin") {
    return (
      <div className='card-project-admin'>
        <div className='content-card-project'>
          <img src={imgUrl} alt={title} />
          <div className='desc-project'>
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={renderDescription()}></p>
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
        <img src={imgUrl} alt={title} />
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={renderDescription()}></p>
        <Link to={link} className='button-card'>Lien du projet</Link>
      </div>
    );
  }
}

export default Card;
