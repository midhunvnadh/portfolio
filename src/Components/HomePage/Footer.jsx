import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faArrowUp, faCopyright, } from "@fortawesome/free-solid-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"

class Footer extends React.Component {
    scrollTo( element, to, duration){
        if (duration < 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 2;
        setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            this.scrollTo(element, to, duration - 2);
        }, 10);
    }
    render(){
        return(
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <FontAwesomeIcon icon = {faCopyright}/> Free to use
                        <b> * </b> 
                        <a href = "https://github.com/midhunvnadh/portfolio/" target = "_blank" rel="noopener noreferrer" >
                            Source
                        </a>
                    </p>
                    <span className = "go-to-top" onClick = {() => {this.scrollTo(document.body, 0, 100)}}> <FontAwesomeIcon icon = {faArrowUp}/></span>
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