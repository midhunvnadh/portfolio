import React from 'react';
import {Link} from "react-router-dom"
function Contact(){
    return(
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
    );
}
export default Contact;