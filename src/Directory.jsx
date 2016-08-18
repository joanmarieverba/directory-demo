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
   color: "black",
   fontSize: "36px",
   top: "0",
   left : "0",
   border: "3px solid #73AD21",
   backgroundColor: "palegreen",
   WebkitTransition: 'all',
   msTransition: 'all'
 }

 var updateButton = {
   color: "black",
   border: "2px solid black",
 }

  var divButton = {
    height: '20px',
    position: "fixed",
    zIndex: "100",
    right: "15px",
    textAlign: "right",
    top: "12px",
  }


export default class Directory extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      entryArray: [],
      oneEntry: [],
      userid : localStorage.getItem('userid'),  //this.state.userid
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
    browserHistory.push('/profile/');
  }

  render() {
    this.state.entryArray.sort(function(a, b) {
      var nameA = a.lastName.toUpperCase() + a.firstName.toUpperCase(); // ignore upper and lowercase
      var nameB = b.lastName.toUpperCase() + a.firstName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
          return -1;
      }
      if (nameA > nameB) {
          return 1;
      }
      // names must be equal
      return 0;
    });

    return (
      <div style={directoryPageStyle} >
        <span style={titleBanner}>Directory</span>
        <div style={divButton}><Button size="sm" style={updateButton} onClick={this.handleProfileButtonClick.bind(this)}>Update/enter my profile</Button></div>
        <DirectoryList entryArray={this.state.entryArray} />
      </div>
    );
  }
};
