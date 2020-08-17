import React from 'react';
import {Link} from "react-router-dom";

function Blog(){
    return(
        <section class = "anim-section blog-page">
            <Link to = {"/"}>
                <span class = "close-section">
                    &#10006;
                </span>
            </Link>
            <div class = "header">
                <h1 class = "section-identity">Official Blog</h1>
                <p>These are my latest posts</p>
            </div>
        </section>
    );
}
export default Blog;