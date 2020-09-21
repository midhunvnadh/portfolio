import React from 'react';
import port_pic from "../img/port_pic.png";
import Reveal from 'react-reveal/Reveal'
import $ from 'jquery'
import Pagelogo from "../img/logo512.png"
import data from "./data/EN_US/main.json";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showHeaderAnimation: false};
    }
    componentDidMount(){
        $(document).ready(() => {
            $(".loader-hold").animate({
                left: "+=100%"
            }, 1000, () => {
                $(this).remove();
                this.setState({showHeaderAnimation:true});
            });
        });
    }
    render () {
       return (
           <>
                <div className = "loader-hold">
                    <div className = "logonholder">
                        <figure>
                            <img src = {Pagelogo} alt = "logo"/>
                        </figure>
                        <div className = "loader"></div>
                    </div>
                </div>
                <header className = "section">
                    <div className = "container level">
                        <div className = "level-left">
                            <Reveal effect = "flyFromLeft" when = {this.state.showHeaderAnimation}>
                                <span className = "level-item">
                                    <figure className = "image is-128x128">
                                        <img className = "is-rounded has-ratio" src = {port_pic} alt = ""/>
                                    </figure>
                                </span>
                            </Reveal>
                            <Reveal effect = "lightSpeedUp" when = {this.state.showHeaderAnimation}>
                                <div className = "hero">
                                    <div className = "hero-body">
                                        <div className = "container">
                                            <h1 className = "title">{data.main.page_name}</h1>
                                            <h2 className = "subtitle">{data.main.page_subtitle}</h2>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className = "level-right">
                            <div className = "nav-bar-holder">
                                <span className = "NavBar"></span>
                            </div>
                        </div>
                    </div>
                    <div className = "container pt-6">
                        <div className = "columns">
                            <div className = "other-links column is-12-mobile has-text-right is-size-1-desktop is-size-2-touch">
                                <ul className = "">
                                    <Reveal effect = "flyFromRight" wait = {1000} when = {this.state.showHeaderAnimation}>
                                        <li>
                                            Skill Board
                                        </li>
                                        <li>
                                            Project List
                                        </li>
                                    </Reveal>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
  }
}
export default Main;