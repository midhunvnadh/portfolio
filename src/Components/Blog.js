import React from 'react';
import {Link} from "react-router-dom";

function Blog(){
    return(
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
    );
}
export default Blog;