import React from 'react';
import {Link} from "react-router-dom"
import { motion } from "framer-motion"
import { TransitionSub, HeaderColor } from "./Transitions";

function Contact(){
    HeaderColor();
    return(
    <motion.div className="app" 
        transition  = "transProps"
        animate     = "in"
        exit        = "out"
        initial     = "out"
        variants    = { TransitionSub() }
    >
        <section className = "anim-section contact-page">
            <Link to = {"/"}>
                <span className = "close-section">
                    &#8592;	
                </span>
            </Link>
            <div className = "header">
                <h1 className = "section-identity">Contact Me</h1>
                <p>You know, we could get in touch !</p>
            </div>
        </section>
    </motion.div>
    );
}
export default Contact;