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
      // dataArray : JSON.parse(localStorage.getItem('dataArray')),
    }
    console.log(this.state);

    directory.fetch().subscribe( (results) => {
      this.setState({
        entryArray: results
      });
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
    var id = this.state.userid;
    var oneEntry = this.state.entryArray;
    oneEntry.filter((item) => {
      if (id === item.id){return true;} else {return false;}
    });
    return (
      <div style={confirmPageStyle} >
        <span style={msgBanner}>Your Profile Information Has Been Saved</span>
        <Button size="sm" style={returnButton} onClick={this.handleReturnButtonClick.bind(this)}>Return to Directory</Button>
        <div style= {confirmPageItem}>
          <div>{this.state.oneEntry[0].firstName}
          {this.state.oneEntry[0].lastName}</div>
          <div>{this.state.oneEntry.penName}</div>
          <div>{this.state.oneEntry.street1}</div>
          <div>{this.state.oneEntry.street2}</div>
          <div>{this.state.oneEntry.city}
          {this.state.oneEntry.mystate}
          {this.state.oneEntry.postCode}
          {this.state.oneEntry.country}</div>
          <div>{this.state.oneEntry.phone}
          {this.state.oneEntry.altPhone}</div>
          <div>{this.state.oneEntry.email}
          {this.state.oneEntry.altEmail}</div>
          <div>{this.state.oneEntry.website}</div>
          <div>{this.state.oneEntry.agent}</div>
          <div>{this.state.oneEntry.fb}</div>
          <div>{this.state.oneEntry.tw}</div>
          <div>{this.state.oneEntry.social}</div>
          <div>{this.state.oneEntry.credits}</div>
          <div>{this.state.oneEntry.id}</div>
        </div>
      </div>
    );
  }
};


// var id = this.state.userid;
// var oneEntry = this.state.entryArray.filter((item) => {
//   console.log("id ", id, " item id ", item.id);
//   if (id === item.id){
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log("profile button clicked", oneEntry);
// localStorage.setItem("singleEntry", oneEntry);
