/* Get Dependencies*/
import React from 'react';
/* Get Components */
import Loader   from './Components/PageLoader'
import Main     from './Components/Main';
import About    from './Components/About';
import Skills   from './Components/Skills';
import Contact  from './Components/Contact';
import Specials from './Components/Special';
import Footer   from './Components/Footer';
import Social   from './Components/Social'

/* Get StyleSheet */
import "./styles/main.scss";

class App extends React.Component {
    render(){
        return (
            <>
                <Loader/>
                <Main />
                <About />
                <Skills />
                <Contact/>
                <Specials />
                <Social/>
                <Footer />
            </>
        );
    }
}
export default App