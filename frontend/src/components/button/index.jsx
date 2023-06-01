import './index.css';
import { Link } from "react-scroll";


function Button({linkButton, contentButton}) {
    return (
        <div className='button'>
            <Link to={linkButton} smooth={true} duration={300} className='button-link'>{contentButton}</Link>
        </div>
    )
};

export default Button