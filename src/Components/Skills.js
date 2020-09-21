import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from "./data/EN_US/skills.json"

const DisplaySectionIcons = () => {
    var icons = data.skills.sec_icons.map(
        ({name, text, key, icon}) => {
            return(
                <li key = {key}>
                    <FontAwesomeIcon icon = {icon}/>
                    <label>
                        {text}
                    </label>
                </li>
            );
        }
    );
    return icons;
}

class Skills extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            skillsToLoad:data.skills.skills,
            visible:6,
        };
        this.loadMore = this.loadMore.bind(this);
    }
    componentDidMount(){
        this.showMoreBtn = document.querySelector(".load-more-hold .buttons .load-more");
    }
    loadSkills() {
        var links = data.skills.skills.slice(
            (prev) => { 
                return {visible: prev.visible};
            }, 
            this.state.visible
        ).map(({ skill, icon, percent}) => {
                return(
                    <div className = "skill-progress column is-half" key={skill}>
                        <label><FontAwesomeIcon icon={icon} /></label>
                        <progress className="progress is-large is-success" value={percent} max="100">60%</progress>
                    </div>
                );
        })
        return links;
    }
    loadMore(){
        this.showMoreBtn.classList.add("is-loading");
        if(this.state.visible < this.state.skillsToLoad.length){
            this.setState((prev) => {
                return {visible: prev.visible + 4};
            });
        }
        else{
            this.setState((prev) => {
                return {visible: prev.visible - 8};
            });
        }
        this.showMoreBtn.classList.remove("is-loading");
    }
    render(){
        return(
            <section className = "hero skills-page">
                <div className = "container is-fluid">
                    <div className = "columns px-4">
                        <div className = "column is-one-third">
                            <div className = "container">

                                <h1 className = "title">My Skills</h1>
                                <h2 className = "subtitle">I speak these</h2>
                                <ul className = "content">
                                    <DisplaySectionIcons />
                                </ul>
                            </div>
                        </div>
                        <div className = "column content is-two-thirds">
                                <div className = "skills-pers columns">
                                    {this.loadSkills()}
                                </div>
                                <div className="load-more-hold">
                                    <div className = "buttons">
                                            <button className="load-more button is-rounded is-success" onClick={this.loadMore}>
                                                { (this.state.visible < this.state.skillsToLoad.length) &&
                                                    <>Load more</>
                                                }
                                                { (this.state.visible >= this.state.skillsToLoad.length) &&
                                                    <>Show less</>
                                                }
                                            </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Skills;