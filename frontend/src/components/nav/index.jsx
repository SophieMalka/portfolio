import React, { useState } from 'react';
import './index.css';
import { HashLink } from 'react-router-hash-link';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <section className="top-nav">
      <input id="menu-toggle" type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li className="menu-item">
          <HashLink to="#home" smooth={true} duration={300} onClick={handleItemClick}>
            Accueil
          </HashLink>
        </li>
        <li className="menu-item">
          <HashLink to="#about" smooth={true} duration={300} onClick={handleItemClick}>
            A propos
          </HashLink>
        </li>
        <li className="menu-item">
          <HashLink to="#projects" smooth={true} duration={300} onClick={handleItemClick}>
            Projets
          </HashLink>
        </li>
        <li className="menu-item">
          <HashLink to="#contact" smooth={true} duration={300} onClick={handleItemClick}>
            Contact
          </HashLink>
        </li>
      </ul>
    </section>
  );
}

export default Nav;
