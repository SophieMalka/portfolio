import './index.css';
import { Link } from "react-scroll";

function Button() {
    return (
        <div className='button'>
            <Link to='projects' smooth={true} duration={300}>Projets</Link>
        </div>
    )
};

export default Button