import React from 'react';
import Reveal from 'react-reveal/Reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpress, faGoogle, faDev, faReact } from '@fortawesome/free-brands-svg-icons'
import Gear from "../svg/setting.svg"
import { Parallax } from 'react-scroll-parallax';

const skillsInfo = [
    {skill:"HTML5", percent:"98%", show:"block"},
    {skill:"CSS3", percent:"98%", show:"block"},
    {skill:"PHP", percent:"95%", show:"block"},
    {skill:"Javascript", percent:"98%", show:"block"},
    {skill:"TypeScript", percent:"98%", show:"block"},
    {skill:"Typography", percent:"86%", show:"block"},
    {skill:"Python", percent:"90%", show:"none"},
    {skill:"Kotlin", percent:"90%", show:"none"},
    {skill:"React", percent:"60%", show:"none"},
    {skill:"Bash", percent:"90%", show:"none"},
    {skill:"Cloud Computing", percent:"70%", show:"none"},
    {skill:"Creative Cloud", percent:"80%", show:"none"},
    {skill:"Raspberry Pi", percent:"85%", show:"none"},
    {skill:"Linux Kernel", percent:"60%", show:"none"}
];
const loadMore = () => {
    var skills = document.querySelectorAll("section .skills-pers .skill"), i
    const moreBtnLabel = document.querySelector(".load-more label")
    if(skills[6].style.display === "none"){
        for (i = 6; i < skillsInfo.length; i++){
            skills[i].style.display = "block";
        }
        moreBtnLabel.innerHTML = "Show Less"
    }
    else{
        for (i = 6; i < skillsInfo.length; i++){
            skills[i].style.display = "none";
        }
        moreBtnLabel.innerHTML = "Show More"
    }
}
const GetSkills = () => {
    const links = skillsInfo.slice(0,skillsInfo.length).map(({ skill, percent, show }) => {
        return(
            <Reveal effect="fillPercent" key = {skill}>
                <div className = "skill" style = {{display:show}}>
                    <label>
                        {skill}
                    </label>
                    <span className = "percent" style={{width:percent}} ></span>
                </div>
            </Reveal>
        );
    });
    return links;
}

function Skills(){
    return(
            <section className = "anim-section skills-page">
                <div className = "header">
                <Parallax className="custom-class" x={[-20, 0]} tagOuter="figure">
                    <div className = "container">
                        <h1 className = "section-identity">My Skills</h1>
                        <p>I am mainly good at these</p>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faWordpress} />
                                <label>
                                    Wordpress
                                </label>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faGoogle} />
                                <label>
                                    SEO Optimization
                                </label>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faDev} />
                                <label>
                                    Web Design and Development
                                </label>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faReact} />
                                <label>
                                    React.js
                                </label>
                            </li>
                        </ul>
                    </div>
                    </Parallax>
                </div>
                <div className = "section-side">
                <Parallax className="custom-class" y={[60, 0]} tagOuter="figure">
                        <div className = "skills-pers">
                                <GetSkills />
                        </div>
                        <div className="load-more-hold">
                            <button className="load-more" onClick={loadMore}>
                                <label>Show More</label>
                                <div className = "loader"></div>
                            </button>
                        </div>
                        </Parallax>
                </div>
                <div className = "svg-hold">
                    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                        <img src = {Gear} alt = ""/>
                    </Parallax>
                </div>
            </section>
    );
}
export default Skills;