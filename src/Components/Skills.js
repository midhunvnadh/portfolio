import React from 'react';
import Fade from 'react-reveal/Fade';

const skillsInfo = [
    {skill:"HTML5", percent:"98%"},
    {skill:"CSS3", percent:"98%"},
    {skill:"PHP", percent:"95%"},
    {skill:"Javascript", percent:"98%"},
    {skill:"TypeScript", percent:"98%"},
    {skill:"Typography", percent:"86%"},
    {skill:"Python", percent:"90%"},
    {skill:"Kotlin", percent:"90%"},
    {skill:"React", percent:"60%"},
    {skill:"Bash", percent:"90%"},
    {skill:"Cloud Computing", percent:"70%"},
    {skill:"Creative Cloud", percent:"80%"},
    {skill:"Raspberry Pi", percent:"85%"},
    {skill:"Linux Kernel", percent:"60%"}
];
const GetSkills = () => { 
    const links = skillsInfo.map(({ skill, percent }) => {
        return(
            <Fade bottom>
                <div className = "skill">
                    <label>
                        {skill}
                    </label>
                    <span className = "percent" style={{width:percent}}></span>
                </div>
            </Fade>
        );
    });
    return links;
}

function Skills(){
    return(
            <section className = "anim-section skills-page">
                <div className = "header">
                    <div className = "container">
                        <h1 className = "section-identity">My Skills</h1>
                        <p>I am good at these</p>
                    </div>
                </div>
                <div className = "section-side">
                        <div className = "skills-pers">
                                <GetSkills />
                        </div>
                </div>
            </section>
    );
}
export default Skills;