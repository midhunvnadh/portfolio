import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import Main     from './Components/Main';
import About    from './Components/About';
import Blog     from './Components/Blog';
import Contact  from './Components/Contact';
import Discover from './Components/Discover';
function App() {
        const location = useLocation();
        return(
            <AnimatePresence /*exitBeforeEnter*/ >
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/"   component={Main}     />
                        <Route path="/about"    component={About}    />
                        <Route path="/blog"     component={Blog}     />
                        <Route path="/contact"  component={Contact}  />
                        <Route path="/discover" component={Discover} />
                    </Switch>
            </AnimatePresence>
        );
}
export default App