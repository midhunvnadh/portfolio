import React from "react";
import { NavLink } from "react-router-dom";
import FirebaseConf from "../../../../Config/Firebase/db_config";
import Zoom from "react-reveal/Zoom";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      message: [],
    };
  }
  getQueryParams(qs) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(qs);
  }
  componentWillMount() {
    this.messageData = FirebaseConf.database()
      .ref()
      .child("contact")
      .child(this.getQueryParams("id"))
    this.messageData
      .on("child_added", (snapshot) => {
        this.state.message.push(snapshot.val());
        this.setState({ showMessage: true });
      })
  }
  deleteMessage() {
    this.messageData.remove();
  }
  render() {
    return (
      <div className="modal message-modal is-active">
        <div className="modal-background"></div>
        {this.state.showMessage && (
          <Zoom bottom>
            <div className="modal-card">
              <div className="modal-card-head">
                <p className="modal-card-title">
                  Message from {this.state.message[1] + this.state.message[2]}
                </p>
                <NavLink to="/admin">
                  <button className="delete" aria-label="close"></button>
                </NavLink>
              </div>
              <div className="modal-card-body">
                <div className="group">
                  <span className="start">From: </span>
                  <span className="end">{this.state.message[0]}</span>
                </div>
                <div className="group">
                  <span className="start">Subject: </span>
                  <span className="end">{this.state.message[4]}</span>
                </div>
                <div className="group break">
                  <span className="start">Message: </span>
                  <span className="end">{this.state.message[3]}</span>
                </div>
                <div className="group">
                  <span className="start">Received: </span>
                  <span className="end">{this.state.message[5]}</span>
                </div>
              </div>
              <footer className="modal-card-foot">
                <NavLink to="/admin">
                  <button
                    className="button is-danger"
                    onClick={this.deleteMessage.bind(this)}
                  >
                    Delete
                  </button>
                </NavLink>
                <NavLink to="/admin">
                  <button className="button is-light">Cancel</button>
                </NavLink>
              </footer>
            </div>
          </Zoom>
        )}
        {!this.state.showMessage && <div className="loader"></div>}
      </div>
    );
  }
}
export default Message;
