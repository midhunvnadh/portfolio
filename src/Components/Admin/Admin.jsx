import React, {useState, useEffect} from 'react';
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade'
import "./style.scss";

import FirebaseConf from '../../Config/Firebase/db_config'

import AdminPanel from './Components/AdminPanel'

const Admin = () => {
    const [currentUser,setCurrentUser] = useState();
    useEffect(() => {
        FirebaseConf.auth().onAuthStateChanged( userAuth => {
            setCurrentUser(userAuth);
        })
    },[])

    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            document.querySelector("#loader-hold").style.transform="scale(3)";
            document.querySelector("#loader-hold").style.opacity="0";
            setTimeout(() => {
                document.querySelector("#loader-hold").remove();
            },200);
        }, 1000)
    })
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        document.querySelector(".adminLoginButton").classList.add("is-loading")
        const { email, password } = user;
        await FirebaseConf.auth().signInWithEmailAndPassword(email, password).catch(error => {alert(error);document.querySelector(".adminLoginButton").classList.remove("is-loading")})
        setUser({username:"", password:""});
    };
    document.title = "Admin Dashboard"
    return(
        <section className = "admin-section container is-fluid has-background-grey-dark">
            {!currentUser ? (
            <div className = "columns is-centered">
                <Fade bottom duration = {2000}>
                    <div className = "column is-4 has-background-grey px-6 py-6 box has-text-centered">
                        <h1 className = "title has-text-light ">Admin Login</h1>
                        <form className = "authform" onSubmit = {onSubmit}>
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input is-rounded" type="email" onChange={onChange} placeholder="Email" autoComplete = "email" name = "email"/>
                                    <span className="icon is-small is-left">
                                        <FontAwesomeIcon icon = {faEnvelope}/>
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input is-rounded" type="password" onChange={onChange} placeholder="Password" autoComplete = "current-password" name = "password"/>
                                    <span className="icon is-small is-left">
                                        <FontAwesomeIcon icon={faLock}/>
                                    </span>
                                </p>
                            </div>
                            <div className="field ">
                                <p className="control">
                                    <button className="adminLoginButton button login-btn is-rounded is-primary">
                                    Login
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </Fade>
            </div>
            ) : (
                <AdminPanel/>
            )}
        </section>
    );
}
export default Admin