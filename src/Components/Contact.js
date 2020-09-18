import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import MailSvg from '../svg/message.svg';
import {Parallax } from 'react-scroll-parallax';

const Contact = () => {
    
    return(
        <section className = "anim-section contact-page">
            <div className = "header">
            <Parallax className="custom-class" x={[-20, 0]} tagOuter="figure">
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
                </Parallax>
            </div>
            <div className = "section-side">
            <Parallax className="custom-class" y={[40, 0]} tagOuter="figure">
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
                </Parallax>
            </div>
            <div className = "svg-hold">
                <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                    <img src = {MailSvg} alt = ""/>
                </Parallax>
            </div>
        </section>
    );
}
export default Contact;