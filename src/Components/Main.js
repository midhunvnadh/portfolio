import React from 'react';
import "../styles/main.scss";
import port_pic from "../img/port_pic.png";
import Nav from '../Nav';
class Main extends React.Component {
  render () {
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
            <Nav/>
        </div>
    </section>
      );
  }
}
export default Main;