import FirebaseConf from '../../../Config/Firebase/db_config'
import React from 'react';
import { faAsterisk, faPlus, faMoon, faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SiteTheme extends React.Component{
    constructor(){
        super();
        this.state = {
            showTabs:[false, true, false],
            alert: false,
            alertData: {},
            addedColorSchemes:false,
            colorSchemes:[]
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
    submitNewPallet(e){
        e.preventDefault();
        const params = {
            primaryColor:this.primaryColor.value,
            secondaryColor:this.secondaryColor.value,
            teritiaryColor:this.teritiaryColor.value,
            quaternaryColor:this.quaternaryColor.value,
            quinaryColor:this.quinaryColor.value
        }
        if (params.primaryColor && params.secondaryColor && params.teritiaryColor && params.quaternaryColor && params.quinaryColor) {
            FirebaseConf.database().ref('colorSchemes').push(params).then(() => {
                this.showAlert('Added !', 'success' ,'Added New ColorScheme');
                setTimeout(() => {
                    this.setState({showTabs:[false, true, false]});
                },4000);
            }).catch(() => {
                this.showAlert("Can't Add ColorScheme", 'danger',  'Error Adding Color Scheme');
            });
            this.refs.colorSchemeForm.reset();
        } else {
              this.showAlert('Warning !','warning', 'Please fill all the fields. All fields are important !');
        };
    }
    componentDidMount(){
        FirebaseConf.database().ref().child("colorSchemes").on('child_added', snapshot => {
            this.state.colorSchemes.push({
                primaryColor:snapshot.val().primaryColor,
                secondaryColor:snapshot.val().secondaryColor,
                teritiaryColor:snapshot.val().teritiaryColor,
                quaternaryColor:snapshot.val().quaternaryColor,
                quinaryColor:snapshot.val().quinaryColor,
                key:snapshot.key
            });
            this.setState({addedColorSchemes:true});
        });
    }
    removeColorScheme(key, index){
        if (window.confirm('Are you sure you want to delete this pallet ?')) {
            FirebaseConf.database().ref().child("colorSchemes").child(key).remove().then(() => {
                this.showAlert('Removed !', 'success' ,'Removed the Color Scheme');
                document.querySelectorAll(".availableColorSchemes table tbody tr")[index].remove()
                setTimeout(() => {
                    this.setState({showTabs:[false, true, false]});
                },4000);
            }).catch(() => {
                this.showAlert("Can't Remove Color Scheme", 'danger',  'Error Deleting Color Scheme');
            });
        }
    }
    render(){
        return(
            <div className = "site-theme-card">
                <div className="tabs is-centered is-toggle is-rounded">
                    <ul>
                        <li className={(this.state.showTabs[0] ? 'is-active' : '')} onClick = {() => {this.setState({showTabs:[true, false, false]})}}>
                            <a>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon = {faMoon}/>
                                </span>
                                <span>Dark Mode</span>
                            </a>
                        </li>
                        <li className={(this.state.showTabs[1] ? 'is-active' : '')} onClick = {() => {this.setState({showTabs:[false, true, false]})}}>
                            <a>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon = {faAsterisk}/>
                                </span>
                                <span>Available</span>
                            </a>
                        </li>
                        <li className={(this.state.showTabs[2] ? 'is-active' : '')} onClick = {() => {this.setState({showTabs:[false, false, true]})}}>
                            <a>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon = {faPlus}/>
                                </span>
                                <span>Add</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className = "container" style = {{minHeight:"300px"}}>
                    {this.state.showTabs[0] &&
                        <div className="dark-mode">
                            Dark Mode
                        </div>
                    }
                    {this.state.showTabs[1] &&
                        <div className="availableColorSchemes">
                            <table className = "table is-fullwidth has-text-centered">
                            <tbody>
                            {this.state.addedColorSchemes &&
                                this.state.colorSchemes.map(({primaryColor, secondaryColor, teritiaryColor, quaternaryColor, quinaryColor, key}, index) => {
                                    return  <tr className = "c-scheme" key = {key}>
                                                <td>
                                                    <span alt = {primaryColor} style = {{background:primaryColor}}></span>
                                                    <span alt = {secondaryColor} style = {{background:secondaryColor}}></span>
                                                    <span alt = {teritiaryColor} style = {{background:teritiaryColor}}></span>
                                                    <span alt = {quaternaryColor} style = {{background:quaternaryColor}}></span>
                                                    <span alt = {quinaryColor} style = {{background:quinaryColor}}></span>
                                                </td>
                                                <td>
                                                    <div className = "buttons">
                                                        <button className = "button is-danger" onClick = {() => {this.removeColorScheme(`${key}`, `${index}`)}}>
                                                            <FontAwesomeIcon icon = {faTrash}/>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                })
                            }
                            </tbody>
                            </table>
                        </div>
                    }
                    {this.state.showTabs[2] &&
                        <div className="addColorScheme">
                            <div className = "columns">
                                <form onSubmit = {this.submitNewPallet.bind(this)} ref = 'colorSchemeForm'>
                                    <div className="column is-12">
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="text" placeholder="Primary Color" ref={primaryColor => this.primaryColor = primaryColor}/>
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
                                            <input className="input" type="text" placeholder="Secondary Color" ref={secondaryColor => this.secondaryColor = secondaryColor}/>
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
                                                <input className="input" type="text" placeholder="Teritiary Color"  ref={teritiaryColor => this.teritiaryColor = teritiaryColor}/>
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
                                        <input className="input" type="text" placeholder="Quaternary Color" ref={quaternaryColor => this.quaternaryColor = quaternaryColor}/>
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
                                        <input className="input" type="text" placeholder="Quinary Color" ref={quinaryColor => this.quinaryColor = quinaryColor}/>
                                        <span className="icon is-small is-left">
                                            V
                                        </span>
                                            <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                        </p>
                                    </div>
                                    <div className = "column is-12">
                                        <div className="field is-grouped">
                                            <div className="control">
                                                <button className="button is-info">Save</button>
                                            </div>
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
                    }
                </div>
            </div>
        );
    }
}