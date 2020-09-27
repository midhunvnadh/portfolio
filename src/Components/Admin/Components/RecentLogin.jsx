import React from 'react';
import FirebaseConf from '../../../Config/Firebase/db_config'
export default class RecentLogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {showLogin:false, lastLogin:[]}
    }
    componentWillMount(){
        this.data = FirebaseConf
        this.data.database().ref().child("last-login").limitToLast(7).on('child_added', snapshot => {
            this.state.lastLogin.push({time:new Date(snapshot.val().time).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})});
            this.setState({showLogin:true});
        });
        this.data.database().ref('last-login').push({time:new Date().toGMTString()}).then().catch()
    }
    componentWillUnmount(){
        this.setState({showLogin:false});
        this.data.database().ref().child("last-login").off()
    }
    render(){
        return(
            <>
            {this.state.showLogin &&
                <table className = "table is-fullwidth">
                    <thead>
                        <tr><th>Record</th><th>Entries</th></tr>
                    </thead>
                    <tbody>
                {this.state.lastLogin.slice(0).reverse().map( (time, i) => {
                    return <tr key = {time.time}><td>{i+1}</td><td>{time.time}</td></tr>
                })}
                </tbody>
                </table>
            }
            </>
        )
    }
}