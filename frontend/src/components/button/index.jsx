import './index.css';
import { Link } from "react-scroll";

function Button() {
    return (
        <div className='button'>
            <Link to='projects' smooth={true} duration={300} className='button-link'>Mes projets</Link>
        </div>
    )
};

export default Button