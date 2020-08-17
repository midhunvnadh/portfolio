import React from 'react';
import {Link} from 'react-router-dom';
function About(){
    return(
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
    );
}
export default About;