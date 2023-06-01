import './index.css';
import htmlImg from '../../assets/pictures/html.png';
import cssImg from '../../assets/pictures/css.png';
import jsImg from '../../assets/pictures/js.png';
import reactImg from '../../assets/pictures/react.png';
import nodeImg from '../../assets/pictures/node.png';
import mongoImg from '../../assets/pictures/mongodb.png';

function Stack() {
    return (
        <div className='stack'>
            <img src={htmlImg} alt='logo html' />
            <img src={cssImg} alt='logo css' />
            <img src={jsImg} alt='logo js' />
            <img src={reactImg} alt='logo react' />
            <img src={nodeImg} alt='logo node' />
            <img src={mongoImg} alt='logo mongodb' className='mongodb' />
        </div>
    )
}

export default Stack