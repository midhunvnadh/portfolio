import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faAsterisk } from '@fortawesome/free-solid-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import firebaseConf from "../../Config/Firebase/db_config"
import Reveal from 'react-reveal/Reveal'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          form: [],
          alert: false,
          alertData: {}
        };
    }
    showAlert(type,classBulma ,message) {
        this.setState({
          alert: true,
          alertData: { type, classBulma, message }
        });
        setTimeout(() => {
          this.setState({ alert: false });
        }, 4000)
    }
    resetForm() {
        this.refs.contactForm.reset();
    }
    sendMessage(e) {
        e.preventDefault();
        const params = {
          firstname: this.inputFName.value,
          lastname: this.inputLName.value,
          subject: this.inputSubject.value,
          email: this.inputEmail.value,
          message: this.textAreaMessage.value,
          ts:new Date().toGMTString()
        };
        if (params.firstname && params.lastname && params.subject && params.email && params.message) {
          firebaseConf.database().ref('contact').push(params).then(() => {
            this.showAlert('Message Sent !', 'success' ,'Your message was sent successfully. I will reach you with this info via your email as soon as possible.');
          }).catch(() => {
            this.showAlert("Can't Send the Message", 'danger',  'Your message could not be sent. Please report this to me via email if you are seeing this');
          });
          this.resetForm();
        } else {
          this.showAlert('Warning !','warning', 'Please fill all the fields. All fields are important !');
        };
    }
    render(){
        return(
            <section className = "hero contact-page">
                <div className = "container is-fluid">
                    <div className = "columns px-4">
                        <div className = "column is-one-third">
                            <div className = "container">
                                <Reveal effect = "flyFromLeft">
                                    <h1 className = "title">Contact Me</h1>
                                    <h2 className = "subtitle">Get in touch !</h2>
                                    <ul className = "content">
                                        <li>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <label>
                                                <a href = "mailto:midhun.vnadh5732@outlook.com">midhun.vnadh5732@outlook.com</a>
                                            </label>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faTelegram} />
                                            <label>
                                                <a href = "tg://resolve?domain=midhunvnadh">midhunvnadh</a>
                                            </label>
                                        </li>
                                    </ul>
                                </Reveal>
                            </div>
                        </div>
                        <div className = "column content is-two-thirds">
                            <div className = "container px-3">
                                <form className = "contact-form" onSubmit={this.sendMessage.bind(this)} ref='contactForm'>
                                    <div className = "columns">
                                        <div className="column">
                                            <div className="field">
                                                <label className="label" htmlFor = "first-name">First Name</label>
                                                <p className="control has-icons-left">
                                                    <input className="input" name = "first-name" type="text" placeholder="Eg. John" ref={firstname => this.inputFName = firstname}/>
                                                    <span className="icon is-small is-left">
                                                        <FontAwesomeIcon icon={faUser} />
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="field column">
                                            <div className="field">
                                                <label className="label" htmlFor = "last-name">Last Name</label>
                                                <p className="control has-icons-left">
                                                    <input className="input" name = "last-name" type="text" placeholder="Eg. Doe" ref={lastname => this.inputLName = lastname}/>
                                                    <span className="icon is-small is-left">
                                                        <FontAwesomeIcon icon={faUser} />
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field columns">
                                        <div className = "column">
                                            <div className="field">
                                                <label className="label" htmlFor="email">Email</label>
                                                <p className="control has-icons-left">
                                                    <input className="input" name = "email" type="email" placeholder="Eg. Johndoe@example.com" ref={email => this.inputEmail = email}/>
                                                    <span className="icon is-small is-left">
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className = "column">
                                            <div className="field">
                                                <label className="label" htmlFor = "subject">Subject</label>
                                                <p className="control has-icons-left">
                                                    <input className="input" name = "subject" type="text" placeholder="Eg. Inquiry" ref={subject => this.inputSubject = subject}/>
                                                    <span className="icon is-small is-left">
                                                        <FontAwesomeIcon icon={faAsterisk} />
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <label className="label" htmlFor = "message">Message</label>
                                            <textarea className="textarea" name = "message" placeholder="Eg. Just wanted to ask you about..." ref={message => this.textAreaMessage = message}></textarea>
                                        </div>
                                    </div>
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button className="button is-primary">Submit</button>
                                        </div>
                                        <div className="control">
                                            <button className="button is-primary is-light" type="reset">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                                    {this.state.alert && 
                                        <div className='toast py-3'>
                                            <article className={`message is-${this.state.alertData.classBulma}`}>
                                                <div className="message-header">
                                                    {this.state.alertData.type}
                                                </div>
                                                <div className="message-body">
                                                    {this.state.alertData.message}
                                                </div>
                                            </article>
                                        </div>
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Contact;