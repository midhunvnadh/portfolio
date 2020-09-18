import React from 'react';
import Main     from './Components/Main';
import About    from './Components/About';
import Blog     from './Components/Skills';
import Contact  from './Components/Contact';
import Discover from './Components/Discover';
import Footer   from './Components/Footer';
import Social   from './Components/Social'
import "./styles/main.scss";
function App() {
    return [

        <Main />,
        <Social />,
        <About />,
        <Blog />,
        <Contact/>,
        <Discover />,
        <Footer />
    ];
}
export default App