import React, {Component} from 'react';
import ProfileForm from './ProfileForm.jsx';
import ChatList from './ChatList.jsx';
import Confirm from './Confirm.jsx';
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
   paddingLeft: "30px",
  //  paddingRight: "150px",
   paddingTop: "20px",
  //  paddingBottom: "40px",
  //  display: "inline-block",
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
      userid : localStorage.getItem('userid'),  //this.state.userid
    }
    // chat.watch().subscribe( (results) => {
		//     this.setState({
		// 	       messageArray: results
    //        });
    // });
  }

  handleNewMsg(
    firstName,
    lastName,
    penName,
    street1,
    street2,
    city,
    mystate,
    postCode,
    country,
    phone,
    altPhone,
    email,
    altEmail,
    website,
    agent,
    fb,
    tw,
    social,
    credits) {   //method
  //     chat.store( {
	//       message: message,
	//       id: this.props.params.id,
	//       gmt: gmt,
  // })}
    console.log ("firstName ", firstName, "credits ", credits, this);
    var newMessageArray = Array.prototype.slice.call(this.state.messageArray);
    newMessageArray.push({
      firstName: firstName,
      lastName: lastName,
      penName: penName,
      street1: street1,
      street2: street2,
      city: city,
      mystate: mystate,
      postCode: postCode,
      country: country,
      phone: phone,
      altPhone: altPhone,
      email: email,
      altEmail: altEmail,
      website: website,
      agent: agent,
      fb: fb,
      tw: tw,
      social: social,
      credits: credits,
      id: this.state.userid
    });
    localStorage.setItem("dataArray", JSON.stringify(newMessageArray));
  }

 //react calls render over and over again by the brower when it refreshes
    render() {
      // console.log("nickname:", {this.props.nickname});
      return (
        <div style={chatpageStyle}>
          <h1 style={boxheader}>View/Change Your Profile</h1>
          <ProfileForm id={this.state.userid} onNewMsg={this.handleNewMsg.bind(this)} />
          {/* <Confirm id={this.state.userid} messageArray={this.state.messageArray} /> */}
        </div>
      )}
    };
