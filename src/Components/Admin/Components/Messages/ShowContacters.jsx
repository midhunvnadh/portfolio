import FirebaseConf from '../../../../Config/Firebase/db_config'
import React from 'react';
import { NavLink} from "react-router-dom";
import { faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ShowContacters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contacters:[],
            showContacters:false,
        }
    }
    componentDidMount(){
        this.contactData = FirebaseConf.database().ref().child("contact");
        this.contactData.on('child_added', snapshot => {
            this.state.contacters.push(
                {
                    email:snapshot.val().email,
                    name:snapshot.val().lastname + ", " + snapshot.val().firstname,
                    message:snapshot.val().message,
                    subject:snapshot.val().subject,
                    ts:new Date(snapshot.val().ts).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}),
                    key:snapshot.key
                }
            );
            this.setState({showContacters:true});
        });
    }
    componentWillUnmount(){
        this.contactData.off();
    }
    render(){
        return(
            <table className = "table is-fullwidth">
                <thead>
                    <tr><th>Date and Time</th><th>Name</th><th>Subject</th><th>Action</th></tr>
                </thead>
                <tbody>
                    {this.state.showContacters &&
                        this.state.contacters.map(({name, subject, ts, key}) => {
                            return(
                                <tr key = {key}>
                                    <td>{ts}</td><td>{name}</td><td>{subject}</td>
                                    <td>
                                        <div className = "buttons">
                                            <NavLink to={`/admin/message?id=${key}`}>
                                                <button className = "button is-info">
                                                    <span className="icon is-info">
                                                        <FontAwesomeIcon icon = {faEye} />
                                                    </span>
                                                    <span>View</span>
                                                </button>
                                            </NavLink>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    {!(this.state.showContacters)&&
                        <tr>
                            <td><div className = "loader"></div></td>
                            <td><div className = "loader"></div></td>
                            <td><div className = "loader"></div></td>
                            <td><div className = "loader"></div></td>
                            <td><div className = "loader"></div></td>
                        </tr>
                    }
                </tbody>
            </table>
        );
    }
}