import Header from "../../components/header";
import Home from "../home";
import About from "../about";
import Projects from "../projects";
import Contact from "../contact";

function Landing() {
    return (
        <div className='page'>
            <Header />
            <Home />
            <About />
            <Projects path='/projects'/>
            <Contact />
        </div>
    )
};

export default Landing