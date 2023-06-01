import './index.css';
import { HashLink } from 'react-router-hash-link';

function Nav() {
    return (
        <nav className='menu'>
            <li className='menu-list'>
                <HashLink to='#home' smooth={true} duration={300}><ul className='menu-item'>Accueil</ul></HashLink>
                <HashLink to='#about' smooth={true} duration={300}><ul className='menu-item'>A propos</ul></HashLink>
                <HashLink to='#projects' smooth={true} duration={300}><ul className='menu-item'>Projets</ul></HashLink>
                <HashLink to='#contact' smooth={true} duration={300}><ul className='menu-item'>Contact</ul></HashLink>
            </li>
        </nav>
    )
}

export default Nav