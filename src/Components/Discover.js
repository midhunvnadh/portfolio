import React from 'react';
import {Link} from 'react-router-dom';
function Discover(){
    return(
        <section class = "anim-section discover-page">
            <Link to = {"/"}>
                <span class = "close-section">
                    &#10006;
                </span>
            </Link>
            <div class = "header">
                <h1 class = "section-identity">Discover Me !</h1>
                <p>You might be surprised !</p>
            </div>
        </section>
    );
}
export default Discover;
