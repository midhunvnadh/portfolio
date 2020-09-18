import React from 'react';
import port_pic from "../img/port_pic.png";
import { Parallax } from 'react-scroll-parallax';
class Main extends React.Component {
    render () {
       return (
                <section className = "home">
                <Parallax className="custom-class" y={[0, 25]} tagOuter="figure">
                    <div className = "center">
                        <span className = "port_pic_holder">
                            <img src = {port_pic} alt = ""/>
                        </span>
                        <div className = "my_info">
                            <span className = "my_name">
                                <h1>Midhun V Nadh</h1>
                            </span>
                            <p className = "my_info_desc">
                                Computer Science Enthusiast &
                                <strong> Programmer</strong>
                            </p>
                        </div>
                    </div>
                </Parallax>
                </section>
        );
  }
}
export default Main;