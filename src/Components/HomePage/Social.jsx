import React from 'react';
import {faYoutube, faTelegram, faTwitter, faGithub, faWordpress, faFacebook, faGitlab} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tada from 'react-reveal/Tada';

function Social(){
    return(
        <div className="social-info container is-fluid">
            <div className = "columns  is-vcentered">
                <div className = "column is-6">
                    <div className = "hero-body">
                        <div className = "container">
                            <h1 className = "title is-size-3-desktop">Find me Online</h1>
                            <h2 className = "subtitle">I'm here to help</h2>
                        </div>
                    </div>
                </div>
                <div className = "column is-6 py-6 has-text-centered">
                    <div className="columns is-mobile">
                        <div className = "column is-gapless" data-platform = "youtube">
                            <a href = "https://www.youtube.com/MidhunVNadh" target = "_blank" rel="noopener noreferrer" >
                                <Tada right duration = {1000}>
                                    <figure className= "icon ">
                                        <FontAwesomeIcon icon = {faYoutube}/>
                                    </figure>
                                </Tada>
                            </a>
                        </div>
                        <div className = "column is-gapless" data-platform = "telegram">
                            <a href = "tg://resolve?domain=midhunvnadh" target = "_blank" rel="noopener noreferrer" >
                                <Tada right duration = {1000}>
                                    <figure className="icon">
                                        <FontAwesomeIcon icon = {faTelegram}/>
                                    </figure>
                                </Tada>
                            </a>
                        </div>
                        <div className = "column is-gapless" data-platform = "twitter">
                            <a href = "https://www.twitter.com/midhunvnadh27" target = "_blank" rel="noopener noreferrer" >
                                <Tada right duration = {1000}>
                                    <figure className="icon">
                                        <FontAwesomeIcon icon = {faTwitter}/>
                                    </figure>
                                </Tada>
                            </a>
                        </div>
                        <div className = "column is-gapless" data-platform = "github">
                            <a href = "https://www.github.com/midhunvnadh" target = "_blank" rel="noopener noreferrer" >
                                <Tada right duration = {1000}>
                                    <figure className="icon">
                                        <FontAwesomeIcon icon = {faGithub}/>
                                    </figure>
                                </Tada>
                            </a>
                        </div>
                        <div className = "column is-gapless" data-platform = "wordpress">
                            <a href = "https://www.techify.club" target = "_blank" rel="noopener noreferrer" >
                                <Tada right duration = {1000}>
                                    <figure className="icon">
                                        <FontAwesomeIcon icon = {faWordpress}/>
                                    </figure>
                                </Tada>
                            </a>
                        </div>

                        <div className = "column is-gapless" data-platform = "skype">
                            <a href = "https://www.facebook.com/midhun.vnadh.1/" target = "_blank" rel="noopener noreferrer" >
                                <Tada right duration = {1000}>
                                    <figure className="icon">
                                        <FontAwesomeIcon icon = {faFacebook}/>
                                    </figure>
                                </Tada>
                            </a>
                        </div>
                        <div className = "column is-gapless" data-platform = "gitlab">
                            <a href = "https://www.gitlab.com/midhunvnadh" target = "_blank" rel="noopener noreferrer" >
                                <Tada right duration = {1000}>
                                    <figure className="icon">
                                        <FontAwesomeIcon icon = {faGitlab}/>
                                    </figure>
                                </Tada>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Social;