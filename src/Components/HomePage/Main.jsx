import React from 'react';
import port_pic from "./img/port_pic.webp";
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'
import data from "./data/en_us.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight, faMoon, faSun, faPaintRoller } from '@fortawesome/free-solid-svg-icons';
import { Typewriter } from 'react-typewriting-effect'

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            showHeaderAnimation: false,
            devMode:false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        this.state.devMode ? this.setState({devMode: false}) : this.setState({devMode: true})
    }
    componentDidMount(){
        window.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                document.querySelector("#loader-hold").style.transform="scale(3)";
                document.querySelector("#loader-hold").style.opacity="0";
                this.setState({showHeaderAnimation:true});
                setTimeout(() => {
                    document.querySelector("#loader-hold").remove();
                },200);
            }, 1000)
        })
    }
    changeColorScheme(primaryColor, secondaryColor, teritiaryColor, quaternaryColor, quinaryColor){
        document.documentElement.style.setProperty('--primary-color',primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
        document.documentElement.style.setProperty('--teritiary-color',teritiaryColor);
        document.documentElement.style.setProperty('--quaternary-color', quaternaryColor);
        document.documentElement.style.setProperty('--quinary-color', quinaryColor);
    }
    setColorScheme({target}) {
        if(target.getAttribute('data-id') === "primary"){
            document.documentElement.style.setProperty('--primary-color',target.value);
        }
        else if(target.getAttribute('data-id') === "secondary"){
            document.documentElement.style.setProperty('--secondary-color', target.value);
        }
        else if(target.getAttribute('data-id') === "teritiary"){
            document.documentElement.style.setProperty('--teritiary-color',target.value);
        }
        else if(target.getAttribute('data-id') === "quaternary"){
            document.documentElement.style.setProperty('--quaternary-color', target.value);
        }
        else if(target.getAttribute('data-id') === "quinary"){
            document.documentElement.style.setProperty('--quinary-color', target.value);
        }
    }
    
    render () {
        return (
           <>
                <header className = "section">
                    <div className = "container level">
                        <Fade left duration = {1000} when = {this.state.showHeaderAnimation}>
                            <div className = "level-left box">
                                <span className = "level-item">
                                        <figure className = "image is-128x128">
                                            <img className = "is-rounded has-ratio" src = {port_pic} alt = ""/>
                                        </figure>
                                </span>
                                <div className = "hero has-text-centered has-text-left-desktop">
                                    <div className = "hero-body">
                                        <div className = "container">
                                            <h1 className = "title">{data.main.page_name}</h1>
                                            <h2 className = "subtitle">{data.main.page_subtitle}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className = "container pt-6">
                        <div className = "columns">
                            <div className = "other-links column is-12-mobile is-size-2-touch is-size-1-desktop has-text-right">
                                <ul className = "">
                                    <Fade right delay = {1000} when = {this.state.showHeaderAnimation}>
                                        <li>
                                            Welcome to my Space on the Web !
                                        </li>
                                    </Fade>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className = "columns">
                        <div className = "column is-offset-7-desktop is-4-desktop has-text-right">
                            <Fade bottom delay = {2500}>
                            <div className = "css-terminal">
                                <span className = "ui-actions"><span className = "window-actions"></span></span>
                                <div className = "terminal">
                                    <span className = "terminal-bash">
                                        <span className = "domain">midhun@midhunvnadh.ml</span>:<span className = "blue">~</span>$&nbsp;
                                    </span>
                                    <Typewriter className = "input-term"
                                        string={"Explore !"}
                                        delay={800}
                                        cursor="_"
                                    />
                                </div>
                            </div>
                            </Fade>
                        </div>
                    </div>
                    <Reveal effect = "flyFromLeft" wait = {1000} when = {this.state.showHeaderAnimation}>
                        <div className = "site-settings">
                            <span className = "settings-icon">
                                <FontAwesomeIcon icon = {faPaintRoller}/>
                            </span>
                                <div className = "inside-settings">
                                    <form className="columns is-centered py-2" autoComplete="off" onSubmit = {(e)=>{e.preventDefault()}}>
                                        {this.state.devMode &&
                                        <>
                                            <div className="column is-12">
                                                <p className="control has-icons-left has-icons-right">
                                                    <input className="input" type="text" placeholder="Primary Color" data-id = "primary" onChange = {this.setColorScheme}/>
                                                    <span className="icon is-small is-left">
                                                    I
                                                    </span>
                                                    <span className="icon is-small is-right">
                                                        <i className="fas fa-check"></i>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="column is-12">
                                                <p className="control has-icons-left has-icons-right">
                                                    <input className="input" type="text" placeholder="Secondary Color" data-id = "secondary" onChange = {this.setColorScheme}/>
                                                    <span className="icon is-small is-left">
                                                    II
                                                    </span>
                                                    <span className="icon is-small is-right">
                                                        <i className="fas fa-check"></i>
                                                        </span>
                                                </p>
                                            </div>
                                            <div className="column is-12">
                                                <p className="control has-icons-left has-icons-right">
                                                        <input className="input" type="text" placeholder="Teritiary Color"  data-id = "teritiary" onChange = {this.setColorScheme}/>
                                                    <span className="icon is-small is-left">
                                                        III
                                                    </span>
                                                    <span className="icon is-small is-right">
                                                        <i className="fas fa-check"></i>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="column is-12">
                                                <p className="control has-icons-left has-icons-right">
                                                <input className="input" type="text" placeholder="Quaternary Color" data-id = "quaternary" onChange = {this.setColorScheme}/>
                                                <span className="icon is-small is-left">
                                                    IV
                                                </span>
                                                    <span className="icon is-small is-right">
                                                    <i className="fas fa-check"></i>
                                                </span>
                                                </p>
                                            </div>
                                            <div className="column is-12">
                                                <p className="control has-icons-left has-icons-right">
                                                <input className="input" type="text" placeholder="Quinary Color" data-id = "quinary" onChange = {this.setColorScheme}/>
                                                <span className="icon is-small is-left">
                                                    V
                                                </span>
                                                    <span className="icon is-small is-right">
                                                    <i className="fas fa-check"></i>
                                                </span>
                                                </p>
                                            </div>
                                        </>
                                        }
                                        {!this.state.devMode &&
                                        <>
                                        <ColorSchemes/>
                                        <div className="field has-addons column is-12 has-text-centered">
                                            <p className="control">
                                                <button className="button is-light is-rounded" onClick = {() => {this.changeColorScheme("#1b262c","#0f4c75","#3282b8","#bbe1fa","#aff8f6")}}>
                                                    <span className="icon is-small">
                                                        <FontAwesomeIcon icon={faSun}/>
                                                            </span>
                                                    <span>Day</span>
                                                </button>
                                            </p>
                                            <p className="control">
                                                <button className="button is-dark is-rounded" onClick = {() => {this.changeColorScheme("#1d2d50","#133b5c","#1e5f74","#fcdab7","#160f30")}}>
                                                <span className="icon is-small">
                                                    <FontAwesomeIcon icon={faMoon}/>
                                                </span>
                                                    <span>Night</span>
                                                </button>
                                            </p>
                                        </div>
                                        </>
                                        }
                                        <div className = "column is-12 has-text-centered">
                                            <label className="checkbox">
                                                <input type="checkbox" checked={ this.state.checked } onChange={ this.handleChange }/> Developer Mode
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>        
                    </Reveal>
                </header>
            </>
        );
  }
}
class ColorSchemes extends Main{
    constructor(props){
        super(props);
        this.state = {
            colorSchemes:[
                {primaryColor:"#1b262c",secondaryColor:"#0f4c75",teritiaryColor:"#3282b8",quaternaryColor:"#bbe1fa",quinaryColor:"#aff8f6"},
                {primaryColor:"#33464d",secondaryColor:"#395144",teritiaryColor:"#c4c4c4",quaternaryColor:"#e3e3e3",quinaryColor:"#f4f4f4"},
                {primaryColor:"#3c4245", secondaryColor:"#5f6769", teritiaryColor:"#719192", quaternaryColor:"#dfcdc3", quinaryColor:"#fff"}
            ],
            currentColorScheme:0
        };
    }
    componentDidMount(){
        this.changeColorScheme(this.state.colorSchemes[0]);
    }
    changeColorScheme({primaryColor, secondaryColor, teritiaryColor, quaternaryColor, quinaryColor}){
        document.documentElement.style.setProperty('--primary-color',primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
        document.documentElement.style.setProperty('--teritiary-color',teritiaryColor);
        document.documentElement.style.setProperty('--quaternary-color', quaternaryColor);
        document.documentElement.style.setProperty('--quinary-color', quinaryColor);
    }
    changeScheme(str){
        if(str === -1){
            if(this.state.currentColorScheme !== 0){
                this.setState({currentColorScheme:this.state.currentColorScheme-1})
            }
        }
        else if(str === +1){
            if(this.state.currentColorScheme !== this.state.colorSchemes.length - 1){
                this.setState({currentColorScheme:1 + this.state.currentColorScheme});
            }
        }
    }
    componentDidUpdate(){
        this.changeColorScheme(this.state.colorSchemes[this.state.currentColorScheme]);
    }
    render(){
        return(
            <div className = "colorSchemes">
                <span className = "goBack icon-cs" onClick = {() => {this.changeScheme(-1)}}>
                    {!(this.state.currentColorScheme === 0) &&
                        <FontAwesomeIcon icon = {faAngleDoubleLeft}/>
                    }
                </span>
                <div className = "c-scheme">
                    <span style = {{background:this.state.colorSchemes[this.state.currentColorScheme].primaryColor}}></span>
                    <span style = {{background:this.state.colorSchemes[this.state.currentColorScheme].secondaryColor}}></span>
                    <span style = {{background:this.state.colorSchemes[this.state.currentColorScheme].teritiaryColor}}></span>
                    <span style = {{background:this.state.colorSchemes[this.state.currentColorScheme].quaternaryColor}}></span>
                    <span style = {{background:this.state.colorSchemes[this.state.currentColorScheme].quinaryColor}}></span>
                </div>
                <span className = "goNext icon-cs" onClick = {() => {this.changeScheme(+1)}}>
                    {!(this.state.currentColorScheme === this.state.colorSchemes.length - 1) &&
                        <FontAwesomeIcon icon = {faAngleDoubleRight}/>
                    }
                </span>
            </div>
        );
    }
}