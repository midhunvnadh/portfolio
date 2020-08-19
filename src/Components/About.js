import React from 'react';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion"
import { TransitionSub } from './Transitions';

function About(){
    return(
        <motion.div className="app" 
            transition  = "transProps"
            animate     = "in"
            exit        = "out"
            initial     = "out"
            variants    = { TransitionSub() }
        >
            <section className = "anim-section about-page">
                <Link to = {"/"}>
                    <span className = "close-section">
                        &#8592;	
                    </span>
                </Link>
                <div className = "header">
                    <h1 className = "section-identity">About Me</h1>
                    <p>This is a summary on me</p>
                </div>
            </section>
        </motion.div>
    );
}
export default About;