import React from 'react';
import Tada from 'react-reveal/Tada';
import YoutubeIcon from '../svg/youtube.svg';
import TwitterIcon from '../svg/twitter.svg';
import TelegramIcon from '../svg/telegram.svg';
import InstagramIcon from '../svg/instagram.svg';
import FacebookIcon from '../svg/facebook.svg';
function Social(){
    return(
        <div className = "social">
            <Tada delay = {1000}>
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
            </Tada>
        </div>
    );
}
export default Social;