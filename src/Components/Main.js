import React from 'react';
import port_pic from "../img/port_pic.png";
import Nav from '../Nav';
import { motion } from "framer-motion";
import { TransitionMain } from "./Transitions";

class Main extends React.Component {

    render () {
       return (

            <motion.div className="app" 
                transition  = "transProps"
                animate     = "in"
                exit        = "out"
                initial     = "out"
                variants    = { TransitionMain() }
            >
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
                    </div>
                    
                    <motion.div className = "follow_mystery" animate = {{marginTop:'0px', opacity:1}} initial = {false}>
                            <Nav/>
                    </motion.div>
                </section>
            </motion.div>
      );
  }
}
export default Main;