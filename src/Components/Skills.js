import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faPen, faTerminal, faCloud} from '@fortawesome/free-solid-svg-icons'
import { faWordpress, faGoogle, faDev, faReact, faHtml5, faCss3, faPython, faJs, faPhp, faJava, faAdobe, faRaspberryPi, faLinux } from '@fortawesome/free-brands-svg-icons'

const skillsInfo = [
    {skill:"HTML5", percent:"98", show:"block", icon:faHtml5},
    {skill:"CSS3", percent:"98", show:"block", icon:faCss3},
    {skill:"PHP", percent:"95", show:"block", icon:faPhp},
    {skill:"Javascript", percent:"98", show:"block", icon:faJs},
    {skill:"TypeScript", percent:"98", show:"block", icon:faCode},
    {skill:"Typography", percent:"86", show:"block", icon:faPen},
    {skill:"Python", percent:"90", show:"block", icon:faPython},
    {skill:"Kotlin", percent:"90", show:"block", icon:faJava},
    {skill:"React", percent:"60", show:"none", icon:faReact},
    {skill:"Bash", percent:"90", show:"none", icon:faTerminal},
    {skill:"Cloud Computing", percent:"70", show:"none", icon:faCloud},
    {skill:"Creative Cloud", percent:"80", show:"none", icon:faAdobe},
    {skill:"Raspberry Pi", percent:"85", show:"none", icon:faRaspberryPi},
    {skill:"Linux Kernel", percent:"60", show:"none", icon:faLinux}
];
const loadMore = () => {
    var skills = document.querySelectorAll("section .skills-pers .skill-progress"), i
    const moreBtnLabel = document.querySelector(".load-more label")
    if(skills[8].style.display === "none"){
        for (i = 8; i < skillsInfo.length; i++){
            skills[i].style.display = "block";
        }
        moreBtnLabel.innerHTML = "Show Less"
    }
    else{
        for (i = 8; i < skillsInfo.length; i++){
            skills[i].style.display = "none";
        }
        moreBtnLabel.innerHTML = "Show More"
    }
}
const GetSkills = () => {
   var links = skillsInfo.slice(0,skillsInfo.length).map(({ skill, icon, percent, show }) => {
        return(
            <div className = "skill-progress column is-half" style = {{display:show}} key={skill}>
                <label><FontAwesomeIcon icon={icon} /></label>
                <progress className="progress is-large is-primary" value={percent} max="100">60%</progress>
            </div>
        );
    });
    return links;
}

const Skills = () => {
        return(
            <section className = "hero skills-page">
                <div className = "container is-fluid">
                    <div className = "columns px-4">
                        <div className = "column is-one-third">
                            <div className = "container">

                                <h1 className = "title">My Skills</h1>
                                <h2 className = "subtitle">I am mainly good at these</h2>
                                <ul className = "content">
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
                                            Web Design & Development
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
                        </div>
                        <div className = "column content is-two-thirds">
                                <div className = "skills-pers columns">
                                        <GetSkills />
                                </div>
                                <div className="load-more-hold">
                                    <div className = "buttons">
                                        <button className="load-more button is-rounded is-primary" onClick={loadMore}>
                                            <label>Show More</label>
                                            <div className = "loader"></div>
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}
export default Skills;