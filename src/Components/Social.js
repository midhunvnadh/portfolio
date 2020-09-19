import React from 'react';
import {faYoutube, faTelegram, faTwitter, faUbuntu, faWordpress, faSkype, faRaspberryPi} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Social(){
    return(
        <div className="social-info container is-fluid">
            <div className = "columns  is-vcentered">
                <div className = "column is-6">
                    <div className = "hero-body">
                        <div className = "container">
                            <h1 className = "title">Find me Online</h1>
                            <h2 className = "subtitle">I'm here to help</h2>
                        </div>
                    </div>
                </div>
                <div className = "column is-6">
                    <div className="columns is-mobile">
                        <div className = "column is-gapless">
                            <figure className= "icon ">
                                <FontAwesomeIcon icon = {faYoutube}/>
                            </figure>
                        </div>
                        <div className = "column is-gapless">
                            <figure className="icon">
                                <FontAwesomeIcon icon = {faTelegram}/>
                            </figure>
                        </div>
                        <div className = "column is-gapless">
                            <figure className="icon">
                                <FontAwesomeIcon icon = {faTwitter}/>
                            </figure>
                        </div>
                        <div className = "column is-gapless">
                            <figure className="icon">
                                <FontAwesomeIcon icon = {faUbuntu}/>
                            </figure>
                        </div>
                        <div className = "column is-gapless">
                            <figure className="icon">
                                <FontAwesomeIcon icon = {faWordpress}/>
                            </figure>
                        </div>

                        <div className = "column is-gapless">
                            <figure className="icon">
                                <FontAwesomeIcon icon = {faSkype}/>
                            </figure>
                        </div>
                        <div className = "column is-gapless">
                            <figure className="icon">
                                <FontAwesomeIcon icon = {faRaspberryPi}/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Social;