import React from 'react';
import Main     from './Components/Main';
import About    from './Components/About';
import Skills     from './Components/Skills';
import Contact  from './Components/Contact';
import Discover from './Components/Discover';
import Footer   from './Components/Footer';
import Social   from './Components/Social'
import "./styles/bulma.min.css";
import "./styles/main.scss";
function App() {
    return (
        <>
            <Main />
            <About />
            <Skills />
            <Contact/>
            <Discover />
            <Social/>
            <Footer />
        </>
    );
}
export default App