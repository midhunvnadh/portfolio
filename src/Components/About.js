import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reveal from 'react-reveal/Reveal'
import data from './data/EN_US/about.json';

const DisplaySectionIcons = () => {
    var icons = data.about.sec_icons.map(
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
class About extends React.Component{
    componentDidMount(){
    }
    render(){
        return(
            <section className = "hero about-page">
                <div className="container is-fluid">
                    <div className = "columns  px-4">
                        <div className = "column is-one-third">
                            <div className = "container">
                            <Reveal effect = "flyFromLeft">
                                    <h1 className = "title">About Me</h1>
                                    <h2 className = "subtitle">A Summary</h2>
                                    <ul className = "content">
                                        <DisplaySectionIcons/>
                                    </ul>
                                </Reveal>
                            </div>
                        </div>
                        <Reveal effect = "lightSpeedUp">
                            <div className = "column content is-two-thirds" dangerouslySetInnerHTML={ { __html: data.about.sec_content } }>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        );
    }
}
export default About;