import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import MailSvg from '../svg/message.svg';
const Contact = () => {
    
    return(
        <section className = "anim-section contact-page">
            <div className = "header">
                <div className = "container">
                    <h1 className = "section-identity">Contact Me</h1>
                    <p>Get in touch !</p>
                    <ul>
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
            <div className = "section-side">
                <form className = "contact-form">
                        <div className = "form-group row">
                            <input type = "text" autoComplete = "first-name" placeholder = "First Name"/>
                            <input type = "text" autoComplete = "last-name" placeholder = "Last Name"/>
                        </div>
                        <div className = "form-group">
                            <input type = "text" autoComplete = "off" placeholder = "Subject"/>
                        </div>
                        <div className = "form-group">
                            <textarea placeholder = "Message" rows = "8"></textarea>
                        </div>
                        <div className = "form-group">
                            <button>Send Message</button>
                        </div>
                </form>
            </div>
            <div className = "svg-hold">
                    <img src = {MailSvg} alt = ""/>
            </div>
        </section>
    );
}
export default Contact;