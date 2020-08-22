import React from "react";
const Footer = () => {
    return(
        <footer>
            <div className = "main-footer"></div>
            <div className = "sub-footer" >
                &copy; This design is free to use
                <b> * </b> 
                <i>Clone from &nbsp;
                    <a href = "https://www.github.com/midhunvnadh/portfolio" target = "_blank" rel="noopener noreferrer">
                        my repository
                    </a>
                </i>
            </div>
        </footer>
    );
}

export default Footer