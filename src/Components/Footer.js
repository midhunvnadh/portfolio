import React from "react";
const Footer = () => {
    return(
        <footer>
            <div className = "main-footer"></div>
            <div className = "sub-footer" >
                &copy; This is an OpenSource Design 
                <b> * </b> 
                <i>Clone from &nbsp;
                    <a href = "https://www.github.com/midhunvnadh/portfolio" target = "_blank">
                        my repository
                    </a>
                </i>
            </div>
        </footer>
    );
}

export default Footer