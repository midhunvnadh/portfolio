import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
import Main     from './Components/Main';
import About    from './Components/About';
import Blog     from './Components/Blog';
import Contact  from './Components/Contact';
import Discover from './Components/Discover';

const theTransition = {
    out: {
        x: window.innerWidth,
        opacity:0
    },
    in: {
        x: 0,
        opacity:1
    },
    transProps: {
        ease : "easeInOut",
        duration: 0.25
    }
};
function App() {
        return(
            <AnimatePresence exitBeforeEnter >
                <motion.div className="app" 
                   transition  = "transProps"
                   animate     = "in"
                   exit        = "out"
                   initial     = "out"
                   variants    = {theTransition}
                >
                    <Switch>
                        <Route exact path="/"   component={Main}     />
                        <Route path="/about"    component={About}    />
                        <Route path="/blog"     component={Blog}     />
                        <Route path="/contact"  component={Contact}  />
                        <Route path="/discover" component={Discover} />
                    </Switch>
                </motion.div>
            </AnimatePresence>
        );
}
export default App