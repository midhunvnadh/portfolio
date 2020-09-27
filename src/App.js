/* Get Dependencies*/
import React from 'react';
/* Get Components */
import Main     from './Components/HomePage/Main.jsx';
import About    from './Components/HomePage/About.jsx';
import Skills   from './Components/HomePage/Skills.jsx';
import Contact  from './Components/HomePage/Contact.jsx';
import Specials from './Components/HomePage/Special.jsx';
import Footer   from './Components/HomePage/Footer.jsx';
import Social   from './Components/HomePage/Social.jsx'

import Admin    from './Components/Admin/Admin.jsx'

import NotFound from './Components/Extras/NotFound'

import { BrowserRouter, Switch, Route } from "react-router-dom";
import firebaseConf from "./Config/Firebase/db_config"

/* Get StyleSheet */
import "./styles/main.scss";

const HomePage = () => {
    return(
        <>
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

class App extends React.Component {
    render(){
        firebaseConf.analytics()
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/admin">
                            <Admin/>
                        </Route>
                        <Route path="*" component={NotFound} status = {404}/>
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}
export default App