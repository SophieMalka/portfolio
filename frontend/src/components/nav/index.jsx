import './index.css';
import { HashLink } from 'react-router-hash-link';

function Nav() {
  return (
    <section class="top-nav">
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
<li className='menu-item'>
          <HashLink to='#home' smooth={true} duration={300}>
            Accueil
          </HashLink>
        </li>
        <li className='menu-item'>
          <HashLink to='#about' smooth={true} duration={300}>
            A propos
          </HashLink>
        </li>
        <li className='menu-item'>
          <HashLink to='#projects' smooth={true} duration={300}>
            Projets
          </HashLink>
        </li>
        <li className='menu-item'>
          <HashLink to='#contact' smooth={true} duration={300}>
            Contact
          </HashLink>
        </li>
    </ul>
      </section>
  );
}

export default Nav;
