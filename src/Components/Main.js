import React from 'react';
import "../styles/main.scss";
import port_pic from "../img/port_pic.png";
import {Link} from "react-router-dom";

const mainSection = () => {
  return (
    <section class="home">
        <div class = "center">
            <span class = "port_pic_holder">
                <img src = {port_pic} alt = "My Picture"/>
            </span>
            <div class = "my_info">
                <span class = "my_name">
                    <h1>Midhun V Nadh</h1>
                </span>
                <p class = "my_info_desc">
                    Just a dude passionate about computers <br />
                    and goes deep into the mysteries of the <strong>Quantum Realm</strong>
                </p>
            </div>
        </div>
        <div class = "follow_mystery">
            <Link to = {"about"}>
                <button class = "special-btn">
                    About
                </button>
            </Link>

            <Link to = {"blog"}>
                <button class = "special-btn">
                    Blog
                </button>
            </Link>

            <Link to = {"contact"}>
                <button class = "special-btn">
                    Contact
                </button>
            </Link>

            <Link to = {"discover"}>
                <button class = "special-btn">
                    Discover
                </button>
            </Link>
        </div>
    </section>
  );
}

export default mainSection;