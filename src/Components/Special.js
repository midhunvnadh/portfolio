import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt,faExpandArrowsAlt,faMobileAlt, } from '@fortawesome/free-solid-svg-icons'

function Specials(){
    return(
            <section className = "hero special-page">
                <div className="container is-fluid">
                    <div className = "columns  px-4">
                        <div className = "column is-one-third">
                            <div className = "container">
                                <h1 className = "title">Why Me ?</h1>
                                <h2 className = "subtitle">My perks</h2>
                                <ul className = "content">
                                    <li>
                                        <FontAwesomeIcon icon={faBolt} />
                                        <label>
                                            Fast pages
                                        </label>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faMobileAlt} />
                                        <label>
                                            Best User Interface
                                        </label>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faExpandArrowsAlt} />
                                        <label>
                                            Responsive Design
                                        </label>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className = "column content is-two-thirds">
                            <p>Hi, I am a <strong>full stack developer</strong> from Kollam, Kerala, India and is extremely <strong>passionate</strong> about computers. I am currently doing B.Tech in <strong>Computer Science</strong>. I would gladly like to offer you the best of art <strong>custom tailored technical support</strong> with freelance attractive <strong>web development</strong> projects that can hit right at the <strong>bulls-eye</strong>.</p>
                            <p>Apart from being a full stack developer, I develop <strong>Custom ROM's</strong> for Android devices and am a big fan of <strong>Ubuntu Touch</strong> or Linux-on-android projects. Interested in <strong>Android Kernels</strong> and tweaking it to get more cool features.</p>
                            <p>I assure you to make the <strong>best for you</strong> and I make sure that my passion shall reflect on this <strong>page</strong>.</p>
                        </div>
                    </div>
                </div>
            </section>
    );
}
export default Specials;