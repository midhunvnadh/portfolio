import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faArrowUp, faCopyright, } from "@fortawesome/free-solid-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import $ from "jquery";

const scrollToTop = () => {
    $('html, body').animate({
        scrollTop: parseInt($("header").offset().top)
    }, 500);
}

class Footer extends React.Component {
    render(){
        return(
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <FontAwesomeIcon icon = {faCopyright}/> Free to use
                        <b> * </b> 
                        <i>Clone from&nbsp;
                            <a href = "https://www.github.com/midhunvnadh/portfolio" target = "_blank" rel="noopener noreferrer">my repository</a>
                        </i>
                    </p>
                    <span className = "go-to-top" onClick = {scrollToTop}> <FontAwesomeIcon icon = {faArrowUp}/></span>
                </div>
                <div className = "columns has-text-centered is-vcentered">
                    <span className = "power-by column is-half">
                            Powered By 
                            <figure>
                                <img src = "https://bulma.io/images/bulma-logo.png" alt="bulma-logo"/>
                            </figure>
                            and&nbsp;<FontAwesomeIcon icon = {faReact}/>&nbsp;React
                    </span>
                    <p className = "column is-half">
                        Made with <FontAwesomeIcon icon = {faHeart}/> By Midhun V Nadh
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer