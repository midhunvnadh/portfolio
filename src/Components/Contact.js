import React from 'react';
import {Link} from "react-router-dom"
function Contact(){
    return(
        <section class = "anim-section contact-page">
            <Link to = {"/"}>
                <span class = "close-section">
                    &#10006;
                </span>
            </Link>
            <div class = "header">
                <h1 class = "section-identity">Contact Me</h1>
                <p>You know, we could get in touch !</p>
            </div>
        </section>
    );
}
export default Contact;