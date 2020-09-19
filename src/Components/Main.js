import React from 'react';
import port_pic from "../img/port_pic.png";
import Social   from './Social'
class Main extends React.Component {
    render () {
       return (
                <section className = "home">
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
                        <Social/>
                    </div>
                </section>
        );
  }
}
export default Main;