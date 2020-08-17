import React from 'react';
import {Link} from 'react-router-dom';
function About(){
    return(
        <section class = "anim-section about-page">
            <Link to = {"/"}>
                <span class = "close-section">
                    &#10006;
                </span>
            </Link>
            <div class = "header">
                <h1 class = "section-identity">About Me</h1>
                <p>This is a summary on me</p>
            </div>
        </section>
    );
}
export default About;