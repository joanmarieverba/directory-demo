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

    var id = this.state.userid;
    var oneEntry = this.state.entryArray.filter((item) => {
      console.log("id ", id, " item id ", item.id);
      if (id === item.id){
        return true;
      } else {
        return false;
      }
    });
    console.log("profile button clicked", oneEntry);
    localStorage.setItem("singleEntry", oneEntry);
    browserHistory.push('/profile/');
  }

  render() {
    return (
      <div style={directoryPageStyle} >
        <span style={titleBanner}>Directory</span>
        <div style={divButton}><Button size="sm" style={updateButton} onClick={this.handleProfileButtonClick.bind(this)}>Update my profile</Button></div>
        <DirectoryList entryArray={this.state.entryArray} />
      </div>
    );
  }
};
