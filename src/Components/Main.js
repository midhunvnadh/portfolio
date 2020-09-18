import React from 'react';
import port_pic from "../img/port_pic.png";
import Particles from 'react-particles-js';
class Main extends React.Component {
    render () {
       return (
                <section className = "home">
                <Particles
                    id="tsparticles"
                    options={
                    {
                        background: {
                            color: {
                            value: "#0d47a1",
                            },
                        },
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: "canvas",
                            events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                            },
                            modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 400,
                            },
                            push: {
                                quantity: 20,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                            },
                        },
                        particles: {
                            color: {
                                value: "#000",
                            },
                            links: {
                                color: "#000",
                                distance: 20,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 1000,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 1200,
                                },
                                value: 120,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }
                }
                />
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
                </section>
        );
  }
}
export default Main;