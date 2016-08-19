import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button } from 'elemental';
import stores from './stores.jsx';
import {directory} from './stores.jsx';


var confirmPageStyle = {
  backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/08/b066cf3d002a1b5c_1920-e1471016591329.jpg")',
  // backgroundColor: "skyblue",
  backgroundSize: "100%",
  width: '100%',
  minHeight: '100%',
}

var msgBanner = {
   width : "100%",
   position: "fixed",
   textAlign: "center",
   fontFamily: "Arial",
   color: "yellow",
   fontSize: "36px",
   top: "0",
   left : "0",
   border: "3px solid #73AD21",
   backgroundColor: "saddlebrown",
   WebkitTransition: 'all',
   msTransition: 'all'
 }

 var returnButton = {
   float: "right",
   marginLeft: "10px",
 }

 var placeButton = {
   height: '20px',
   position: "fixed",
   zIndex: "100",
   right: "15px",
   textAlign: "right",
   top: "12px",
 }

var confirmPageItem = {
  position: "fixed",
  fontWeight: "bold",
  display: "block",
  padding: "10px",
  width: "50%",
  margin: "55px auto",
  marginBottom: "10px",
  marginTop: "55px",
  border: "3px solid #73AD21",
  borderRadius: "15px",
  fontFamily: "Verdana",
  fontSize: "14px",
  backgroundColor: "white",
  left: "50%",
  transform: "translateX(-50%)",
}

export default class Confirm extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      userid : localStorage.getItem('userid'),  //this.state.userid
      // dataArray : JSON.parse(localStorage.getItem('dataArray')),
    }
    console.log(this.state);

    // directory.fetch().subscribe( (results) => {
    //   this.setState({
    //     entryArray: results
    //   });
    // });
    directory.find({id: this.state.userid}).fetch().subscribe(user => {this.setState({
      firstName : user.firstName,
      lastName: user.lastName,
      penName: user.penName,
      street1: user.street1,
      street2: user.street2,
      city: user.city,
      mystate: user.mystate,
      postCode: user.postCode,
      country: user.country,
      phone: user.phone,
      altPhone: user.altPhone,
      email: user.email,
      altEmail: user.altEmail,
      website: user.website,
      agent: user.agent,
      fb: user.fb,
      tw: user.tw,
      credits: user.credits,
    })
    console.log("user ", user);
   });
  }
  handleReturnButtonClick(e) {   //method
         //go get more data e.target.value
         //set state, use bind below to insure we get the right value for this
  //set state to new query
    e.preventDefault(); //prevents form submission from deleting current page context
    console.log("return button clicked");
    browserHistory.push('/directory/');
  }

  render() {
    var lines = this.state.credits;
    var formatted = lines.split("\n").map(function(item) {
            return (
                     <span>  {item}  <br/> </span>
                 )
    });
    return (
      <div style={confirmPageStyle} >
        <span style={msgBanner}>Your Profile Information Has Been Saved</span>
        <div style={placeButton}><Button size="sm" style={returnButton} onClick={this.handleReturnButtonClick.bind(this)}>Return to Directory</Button></div>
        <div style= {confirmPageItem}>
          <div>{this.state.firstName}  {this.state.lastName}</div>
          <div>{this.state.penName}</div>
          <div>{this.state.street1}</div>
          <div>{this.state.street2}</div>
          <div>{this.state.city}  {this.state.mystate}  {this.state.postCode}  {this.state.country}</div>
          <div>{this.state.phone} {this.state.altPhone}</div>
          <div>{this.state.email} {this.state.altEmail}</div>
          <div>{this.state.website}</div>
          {this.state.agent !== "" ? <div>Agent: {this.state.agent}</div> : null }
          {/* <div>Agent: {this.state.agent}</div> */}
          <div>{this.state.fb}</div>
          <div>{this.state.tw}</div>
          <div>{ formatted }</div>
          {/* <div>{this.state.credits}</div> */}
          {/* <div>{this.state.credits.split("\n").map(function(item) {
                  return (
                      <span>  {item}  <br/> </span>
                  )
                })}
          </div> */}
        </div>
      </div>
    );
  }
};


// render: function() {
//       var lines = this.props.lines;
//
//       var formatted = lines.map(function(line) {
//           return (<p>{line}</p>);
//       });
//       return (<div>{ formatted }</div>);
//   }
