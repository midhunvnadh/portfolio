import React from 'react';
import NavBar from './NavBar'
import { Switch, Route} from "react-router-dom";
import Message from './Messages/Message'
import ShowContacters from './Messages/ShowContacters'
import SiteTheme from './SiteTheme'
import RecentLogin from './RecentLogin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';

const AdminPanel = () => {
        return(
            <>
                <NavBar/>
                <div className = "tile is-ancestor">
                    <div className = "tile is-vertical">
                        <div className = "tile is-12 is-parent">
                            <div className = "is-12 box has-background-white" style = {{width:"100%", minHeight:"300px", overflowX:"auto"}}>
                                <h1 className = "title is-5">Recent Contact Requests</h1>
                                <Switch>
                                    <Route path = "/admin/message" component = {Message}/>
                                    <Route path = "/admin" component = {ShowContacters}/>
                                </Switch>
                            </div>
                        </div>
                        <div className = "tile is-12 is-parent">
                            <div className = "is-12 box has-background-white" style = {{width:"100%"}}>
                                <h1 className = "title is-5">Site Theme</h1>
                                <SiteTheme/>
                            </div>
                        </div>
                    </div>
                    <div className = "tile is-vertical">
                        <div className = "tile is-12">
                            <div className = "tile is-parent">
                                <div className = "tile box is-vertical has-background-white">
                                        <h1 className = "title is-5">Login Record</h1>
                                        <RecentLogin/>
                                </div>
                            </div>
                            <div className = "tile is-parent">
                                <div className = "tile box is-vertical has-background-white">
                                    <form>
                                        <div className="field">
                                            <label className="label" htmlFor="name">Page Name</label>
                                            <p className="control has-icons-left">
                                                <input className="input" name = "site-name" type="text" placeholder="Eg. John Doe"/>
                                                <span className="icon is-small is-left">
                                                    <FontAwesomeIcon icon={faUser} />
                                                </span>
                                            </p>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <label className="label" htmlFor = "message">Subtitle</label>
                                                <textarea className="textarea" name = "message" placeholder="Eg. Designer and Developer"></textarea>
                                            </div>
                                        </div>
                                        <div className="field is-grouped">
                                            <div className="control">
                                                <button className="button is-info">Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className = "tile is-parent is-12">
                            <div className = "box is-parent has-background-white">
                                <h1 className = "title is-5">Social Links</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget leo quis enim porta sagittis. In porttitor lectus sed justo sodales, ut volutpat augue finibus. Cras aliquet consectetur massa ut iaculis. Suspendisse lobortis leo et orci bibendum, ac vehicula sem ullamcorper. Aenean aliquet mi lacus, sed ullamcorper risus varius ut. Proin ac mattis lectus. Quisque mattis ante ante, vitae mattis ante aliquam vitae. Sed nulla velit, mollis non nisi et, euismod facilisis leo. Aliquam pharetra metus ac tempus rhoncus. Phasellus urna enim, lobortis at lacus a, consequat iaculis ipsum. Nulla auctor sodales dolor. Sed non nisl tempor, placerat dolor id, venenatis mi. Nulla a lorem est. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}
export default AdminPanel