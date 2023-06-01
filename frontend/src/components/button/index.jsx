import './index.css';
import { Link } from "react-scroll";


function Button({className, linkButton, contentButton}) {
    return (
        <div className={className}>
            <Link to={linkButton} smooth={true} duration={300} className='button-link'>{contentButton}</Link>
        </div>
    )
};

export default Button