import React from 'react';
import YoutubeIcon from '../svg/youtube.svg';
import TwitterIcon from '../svg/twitter.svg';
import TelegramIcon from '../svg/telegram.svg';
import InstagramIcon from '../svg/instagram.svg';
import FacebookIcon from '../svg/facebook.svg';
import {Parallax } from 'react-scroll-parallax';
function Social(){
    return(
        <Parallax className="social" x={[0, 20]} tagOuter="div">
                <div className="icon-grp">
                    <span className = "social-icon">
                        <img src = {YoutubeIcon} alt=""/>
                    </span>
                    <span className = "social-icon">
                        <img src = {TwitterIcon} alt=""/>
                    </span>
                    <span className = "social-icon">
                        <img src = {TelegramIcon} alt=""/>
                    </span>
                    <span className = "social-icon">
                        <img src = {InstagramIcon} alt=""/>
                    </span>
                    <span className = "social-icon">
                        <img src = {FacebookIcon} alt=""/>
                    </span>
                </div>
        </Parallax>
    );
}
export default Social;