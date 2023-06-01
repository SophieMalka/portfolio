
import Home from '../../pages/home';
import Header from '../header';
import About from '../../pages/about';
import Projects from '../../pages/projects';
import Contact from '../../pages/contact';

function Router() {
    return (
        <div className='page'>
            <Header />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    )
};

export default Router