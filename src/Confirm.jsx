import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button } from 'elemental';


    // browserHistory.push('/chat/nickname')

var confirmPageStyle = {
  // backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/08/2.jpg")',
  backgroundColor: "skyblue",
  width: '100%',
  minHeight: '100%',
}

var msgBanner = {
   width : "100%",
   position: "fixed",
   textAlign: "center",
   fontFamily: 'Orbitron',
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
   marginTop: "60px",
   float: "right",
   marginLeft: "10px",
 }

var confirmPageItem = {
  display: "inline-block",
  marginTop: "55px",
  marginLeft: "30px",
  paddingTop: "10px",
  border : "1px solid violet",
  fontSize: "14px",
  fontFamily: "Passion One",
}

export default class Confirm extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      userid : localStorage.getItem('userid'),  //this.state.userid
      dataArray : JSON.parse(localStorage.getItem('dataArray')),
    }
    console.log(this.state);
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
    return (
      <div style={confirmPageStyle} >
        <span style={msgBanner}>Your Profile Information Has Been Saved</span>
        <Button size="sm" style={returnButton} onClick={this.handleReturnButtonClick.bind(this)}>Return to Directory</Button>
        <div style= {confirmPageItem}>
          <div>{this.state.dataArray[0].firstName}
          {this.state.dataArray[0].lastName}</div>
          <div>{this.state.dataArray[0].penName}</div>
          <div>{this.state.dataArray[0].street1}</div>
          <div>{this.state.dataArray[0].street2}</div>
          <div>{this.state.dataArray[0].city}
          {this.state.dataArray[0].mystate}
          {this.state.dataArray[0].postCode}
          {this.state.dataArray[0].country}</div>
          <div>{this.state.dataArray[0].phone}
          {this.state.dataArray[0].altPhone}</div>
          <div>{this.state.dataArray[0].email}
          {this.state.dataArray[0].altEmail}</div>
          <div>{this.state.dataArray[0].website}</div>
          <div>{this.state.dataArray[0].agent}</div>
          <div>{this.state.dataArray[0].fb}</div>
          <div>{this.state.dataArray[0].tw}</div>
          <div>{this.state.dataArray[0].social}</div>
          <div>{this.state.dataArray[0].credits}</div>
          <div>{this.state.dataArray[0].id}</div>
        </div>
      </div>
    );
  }
};
