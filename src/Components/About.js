import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faBirthdayCake, faCrosshairs, faAward } from '@fortawesome/free-solid-svg-icons'
import SvgBoy from "../svg/business-man.svg"

const GetAge = () => {
    var today = new Date();
    var birthDate = new Date("2002/01/16");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
function About(){
    return(
            <section className = "anim-section about-page">
                <div className = "header">
                    <div className="custom-class">
                        <div className = "container">
                            <h1 className = "section-identity">About Me</h1>
                            <p>This is a summary on me</p>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faBirthdayCake} />
                                    <label>
                                        <GetAge /> Years Old
                                    </label>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faFlag}/>
                                    <label>
                                        Indian
                                    </label>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCrosshairs}/>
                                    <label>
                                        Determined
                                    </label>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faAward}/>
                                    <label>
                                        6 Years Experience
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className = "section-side">
                    <p>Hi, I am a <strong>full stack developer</strong> from Kollam, Kerala, India and is extremely <strong>passionate</strong> about computers. I am currently doing B.Tech in <strong>Computer Science</strong>. I would gladly like to offer you the best of art <strong>custom tailored technical support</strong> with freelance attractive <strong>web development</strong> projects that can hit right at the <strong>bulls-eye</strong>.</p>
                    <p>Apart from being a full stack developer, I develop <strong>Custom ROM's</strong> for Android devices and am a big fan of <strong>Ubuntu Touch</strong> or Linux-on-android projects. Interested in <strong>Android Kernels</strong> and tweaking it to get more cool features.</p>
                    <p>I assure you to make the <strong>best for you</strong> and I make sure that my passion shall reflect on this <strong>page</strong>.</p>
                </div>
                <div className = "svg-hold">
                            <img src = {SvgBoy} alt = ""/>
                </div>
            </section>
    );
}
export default About;