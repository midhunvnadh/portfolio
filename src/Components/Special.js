import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt,faExpandArrowsAlt,faMobileAlt, } from '@fortawesome/free-solid-svg-icons'
import cardData from './data/EN_US/special.json';

const Card = cardData.cards.map(
    (cardData) => {
        return(
            <div className = "card-holder" tabindex="0" key = {cardData.id}>
                <div className = "card">
                    <div className = "card-content">
                        <div className = "media-content">
                            <p className = "title is-4">
                                {cardData.title}
                            </p>
                            <p className = "subtitle is-7">
                                {cardData.subtitle}
                            </p>
                        </div>
                        <div className="content py-2 is-7">
                            {cardData.content}
                        </div>
                        <div className="content">
                            {cardData.hashtags[0]} {cardData.hashtags[1]}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

class Specials extends React.Component{
    render(){
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
                            <div className = "cards">
                               {Card}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
    }
}
export default Specials;