import React from 'react';
import {Link} from 'react-router-dom';
function Discover(){
    return(
        <section className = "anim-section discover-page">
            <Link to = {"/"}>
                <span className = "close-section">
                    &#8592;
                </span>
            </Link>
            <div className = "header">
                <h1 className = "section-identity">Discover Me !</h1>
                <p>You might be surprised !</p>
            </div>
        </section>
    );
}
export default Discover;
