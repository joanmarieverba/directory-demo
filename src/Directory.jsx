import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button } from 'elemental';
import DirectoryList from './DirectoryList.jsx';
import stores from './stores.jsx';
import {directory} from './stores.jsx';


    // browserHistory.push('/chat/nickname')

var directoryPageStyle = {
  backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/08/the-background-707185_1280.png")',
  // backgroundColor: "olive",
  width: '100%',
  minHeight: '100%',
}

var titleBanner = {
   width : "100%",
   position: "fixed",
   textAlign: "center",
   fontFamily: 'Orbitron',
   color: "yellow",
   fontSize: "36px",
   top: "0",
   left : "0",
   border: "3px solid #73AD21",
   backgroundColor: "red",
   WebkitTransition: 'all',
   msTransition: 'all'
 }

 var updateButton = {
   marginTop: "60px",
   float: "right",
   marginRight: "5px",
 }


export default class Directory extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      entryArray: [],
    }
    directory.fetch().subscribe( (results) => {
		this.setState({
			entryArray: results
    });
  });
  }


  handleProfileButtonClick(e) {   //method
         //go get more data e.target.value
         //set state, use bind below to insure we get the right value for this
  //set state to new query
    e.preventDefault(); //prevents form submission from deleting current page context
    console.log("profile button clicked");
    browserHistory.push('/profile/');
  }

  render() {
    return (
      <div style={directoryPageStyle} >
        <span style={titleBanner}>Directory</span>
        <DirectoryList entryArray={this.state.entryArray} />
        <Button size="sm" style={updateButton} onClick={this.handleProfileButtonClick.bind(this)}>Update my profile</Button>
      </div>
    );
  }
};
