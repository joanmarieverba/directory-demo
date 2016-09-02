import React, {Component} from 'react';
import ProfileForm from './ProfileForm.jsx';
import Confirm from './Confirm.jsx';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { browserHistory } from 'react-router';
import Horizon from '@horizon/client';
import stores from './stores.jsx';
import {directory} from './stores.jsx';


var chatpageStyle = {
    backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/08/low-poly-square.jp")',
    // backgroundColor: "lightblue",
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
  //  textAlign: "centered",
  //  fontFamily: "Vast Shadow",
   fontFamily: "Verdana",
   fontSize: "24px",
   fontWeight: "bold",
  //  WebkitTextStroke: "1px black",
   color: "white",
 }
 var instruction = {
      paddingLeft: "30px",
      paddingBottom: "10px",
      fontFamily: "Verdana",
      fontWeight: "bold",
      color: "white",
 }

export default class Profile extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      messageArray: [],
      userid : localStorage.getItem('userid'),  //this.state.userid
    }
    directory.fetch().subscribe( (results) => {
		    this.setState({
			       entryArray: results
           });
    });
    directory.find({id: this.state.userid}).fetch().subscribe(msg => console.log(msg));
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
    credits) {   //method
      directory.store( {
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
        credits: credits,
        id: this.state.userid,
      })}

 //react calls render over and over again by the brower when it refreshes
    render() {
      return (
        <div style={chatpageStyle}>
          <h1 style={boxheader}>View/Change Your Profile</h1>
          <h5 style={instruction}>Enter/change your information and click the Save button below</h5>
          <ProfileForm id={this.state.userid} onNewMsg={this.handleNewMsg.bind(this)} />
        </div>
      )}
    };
