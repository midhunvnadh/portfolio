import React from 'react';
import {Link} from "react-router-dom";
import { motion } from "framer-motion"
import { TransitionSub, HeaderColor } from "./Transitions";

function Blog(){
    HeaderColor();
    return(
        <motion.div className="app" 
            transition  = "transProps"
            animate     = "in"
            exit        = "out"
            initial     = "out"
            variants    = { TransitionSub() }
        >
        <section className = "anim-section blog-page">
            <Link to = {"/"}>
                <span className = "close-section">
                    &#8592;	
                </span>
            </Link>
            <div className = "header">
                <h1 className = "section-identity">Official Blog</h1>
                <p>These are my latest posts</p>
            </div>
        </section>
        </motion.div>
    );
}
export default Blog;