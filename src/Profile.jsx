import React, {Component} from 'react';
import ProfileForm from './ProfileForm.jsx';
import ChatList from './ChatList.jsx';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { browserHistory } from 'react-router';
import Horizon from '@horizon/client';
import stores from './stores.jsx';
import {chat} from './stores.jsx';


var chatpageStyle = {
    // backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/08/fbadc59ed7bd7022_1920.jpg")',
    backgroundColor: "lightblue",
    width: "100%",
    minHeight: "100%",
    WebkitTransition: 'all',
    msTransition: 'all'
 };

 var boxheader = {
   paddingLeft: "200px",
   paddingRight: "150px",
   paddingTop: "20px",
   paddingBottom: "40px",
   display: "inline-block",
   textAlign: "centered",
  //  fontFamily: "Vast Shadow",
   fontFamily: "Passion One",
   fontSize: "24px",
  //  WebkitTextStroke: "1px black",
   color: "black",
 }

export default class Profile extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      messageArray: [],
    }
    chat.watch().subscribe( (results) => {
		this.setState({
			messageArray: results
    });
  });
  }

  handleNewMsg(gmt, message) {   //method
    console.log ("chatgmt ", gmt, "chatmsg ", message, this);
      chat.store( {
	      message: message,
	      id: this.props.params.id,
	      gmt: gmt,
  })}
  //   console.log ("chatgmt ", gmt, "chatmsg ", message, this);
  //   var newMessageArray = Array.prototype.slice.call(this.state.messageArray);
  //   newMessageArray.push({gmt: gmt, message: message, nickname: this.props.params.nickname});
  //   this.setState({messageArray: newMessageArray});
  // }

 //react calls render over and over again by the brower when it refreshes
    render() {
      // console.log("nickname:", {this.props.nickname});
      return (
        <div style={chatpageStyle}>
        <h1 style={boxheader}>View/Change Your Profile</h1>
        <ChatList nickname={this.props.params.nickname} messageArray={this.state.messageArray} />
        <ProfileForm nickname={this.props.params.nickname} onNewMsg={this.handleNewMsg.bind(this)} />
        </div>
      )}
    };
