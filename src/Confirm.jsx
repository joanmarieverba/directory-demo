import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button } from 'elemental';


    // browserHistory.push('/chat/nickname')

var confirmPageStyle = {
  // backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/07/cityscape7.jpg")',
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
   marginRight: "5px",
 }


export default class Confirm extends Component {

  handleReturnButtonClick(e) {   //method
         //go get more data e.target.value
         //set state, use bind below to insure we get the right value for this
  //set state to new query
    e.preventDefault(); //prevents form submission from deleting current page context
    console.log("return button clicked");
    browserHistory.push('/directory/' + this.props.params.id);
  }

  render() {
    return (
      <div style={confirmPageStyle} >
        <span style={msgBanner}>Your Profile Information Has Been Saved</span>
        <Button size="sm" style={returnButton} onClick={this.handleReturnButtonClick.bind(this)}>Return to Directory</Button>
      </div>
    );
  }
};
