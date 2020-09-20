import React from 'react';
import port_pic from "../img/port_pic.png";
class Main extends React.Component {
    render () {
       return (
                <header className = "section">
                    <div className = "container level">
                        <div className = "level-left">
                            <span className = "level-item">
                                <figure className = "image is-128x128">
                                    <img className = "is-rounded has-ratio" src = {port_pic} alt = ""/>
                                </figure>
                            </span>
                            <div className = "hero">
                                <div className = "hero-body">
                                    <div className = "container">
                                        <h1 className = "title">Midhun V Nadh</h1>
                                        <h2 className = "subtitle">
                                            Computer Science Enthusiast &
                                            <strong> Programmer</strong>
                                        </h2>
                                    </div>
                                </div>
                            </div>
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
                                    <li>
                                        Skill Board
                                    </li>
                                    <li>
                                        Project List
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
        );
  }
}
export default Main;