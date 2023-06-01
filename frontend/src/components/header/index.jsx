import './index.css';
import me from '../../assets/pictures/portrait.png';
import { Link } from 'react-router-dom';
import Nav from '../nav';

function Header() {
    return (
        <header>
            <section className='header-left'>
                    <div className='container-logo'>
                        <Link to='/'><img src={me} alt='logo' className='logo-img' /></Link>
                    </div>
                    <Link to='/'><span className='logo-title'>Sophie Malka</span></Link>
            </section>
            <section className='header-right'>
                <Nav />
            </section>
        </header>
    )
};

export default Header