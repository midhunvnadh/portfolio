import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faAsterisk } from '@fortawesome/free-solid-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    
    return(
        <section className = "hero contact-page">
            <div className = "container is-fluid">
                <div className = "columns px-4">
                    <div className = "column is-one-third">
                        <div className = "container">
                            <h1 className = "title">Contact Me</h1>
                            <h2 className = "subtitle">Get in touch !</h2>
                            <ul className = "content">
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <label>
                                        <a href = "mailto:midhun.vnadh5732@outlook.com">midhun.vnadh5732@outlook.com</a>
                                    </label>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTelegram} />
                                    <label>
                                        <a href = "tg://resolve?domain=midhunvnadh">midhunvnadh</a>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className = "column content is-two-thirds">
                        <div className = "container">            
                            <form className = "contact-form">
                                <div className = "columns">
                                    <div className="column">
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="text" placeholder="First Name"/>
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faUser} />
                                            </span>
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-check"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field column">
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="text" placeholder="Last Name"/>
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faUser} />
                                            </span>
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-check"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="field columns">
                                    <div className = "column">
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="email" placeholder="Email"/>
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </span>
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-check"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className = "column">
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="text" placeholder="Subject"/>
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={faAsterisk} />
                                            </span>
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-check"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <textarea className="textarea" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-primary">Submit</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-primary is-light" type="reset">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact;