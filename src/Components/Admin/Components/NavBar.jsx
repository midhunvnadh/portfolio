import React from 'react';
import Portpic from '../../HomePage/img/port_pic.webp'
import FirebaseConfig from '../../../Config/Firebase/db_config'
export default class NavBar extends React.Component{
    render(){
        return(
            <div className = "tile nav-holder is-ancestor">
                <div className = "is-parent">
                    <div className = "tile box has-background-dark">
                        <div className="container level">
                            <div className="level-left has-text-centered-mobile">
                                <figure className = "image is-96x96">
                                    <img src={Portpic} alt = "" className = "is-rounded"/>
                                </figure>
                                <div className = "site-info">
                                    <h1 className = "title is-4 has-text-danger-light">Midhun V Nadh</h1>
                                    <h2 className = "subtitle is-6 has-text-danger-light">Computer Science Enthusiast and Programmer</h2>
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="buttons">
                                    <button className="button is-info" onClick = {() => {FirebaseConfig.auth().signOut()}}>
                                        <strong>Logout</strong>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}