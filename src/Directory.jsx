import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button } from 'elemental';
import DirectoryList from './DirectoryList.jsx';
import stores from './stores.jsx';
import {directory} from './stores.jsx';
import { StyleSheet, css } from 'aphrodite';


const directoryPageStyle = {
  //backgroundImage: 'url("http://joanmarieverba.net/the-background-707185_1280.png")',
  backgroundColor: "olive",
  backgroundSize: "100%",
  width: '100%',
  minHeight: '100%',
}

const titleBanner = {
   width : "100%",
   display: "block",
   margin: "0 auto",
  //  position: "fixed",
   textAlign: "center",
   fontFamily: 'Orbitron',
   color: "black",
  //  fontSize: "36px",
   fontSize: "3vw",
  //  top: "0",
  //  left : "0",
   border: "3px solid #73AD21",
   backgroundColor: "palegreen",
   WebkitTransition: 'all',
   msTransition: 'all'
 }

 const footer = {
    backgroundColor: "limegreen",
    height: "30px",
    // position: "absolute",
    bottom: "0",
    marginTop: "10px",
    textAlign: "center",
    fontFamily: 'Verdana',
 }

 const styles = StyleSheet.create({
   small: {
         '@media (max-width: 800px)': {
             fontSize: '2vw',
             marginTop: '2vw',
         },
         "@media print" : {
              display: "none",
         }
     },
   header: {
     "@media print" : {
          display: "none",
          border: "0",
     }
   }
 });

 const updateButton = {
   color: "black",
   border: "2px solid black",
   fontWeight: "bold",
   marginRight: "1px",
 }

  const profileButton = {
    height: '20px',
    position: "fixed",
    zIndex: "100",
    right: "15px",
    textAlign: "right",
    top: "12px",
  }

  const searchBox = {
    height: '20px',
    position: "fixed",
    zIndex: "100",
    left: "15px",
    textAlign: "left",
    top: "12px",
  }

  const errormsg = {
    color: "black",
    fontFamily: 'Verdana',
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "55px",
  }

export default class Directory extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      displayArray: [],
      entryArray: [],
      searchArray: [],
      searchedName: "",
      userid : localStorage.getItem('userid'),  //this.state.userid
    }
    directory.fetch().subscribe( (results) => {
		    this.setState({
			    entryArray: results,
          displayArray: results
        });
    });
  }

  handleSearchInputChange(e){
    //we have a value
    console.log("target ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({searchedName: e.target.value});
  }

  handleSearchButtonClick(e) {   //method
         //go get more data e.target.value
         //set state, use bind below to insure we get the right value for this
  //set state to new query
    e.preventDefault(); //prevents form submission from deleting current page context
    console.log("search term entered", this.state.searchedName);
    localStorage.setItem("searchedName", this.state.searchedName);
    let searchArray = this.state.entryArray.filter((item) => {
     if (item.lastName.toLowerCase() === this.state.searchedName.toLowerCase()){return true;} else {return false;}
    });
    if (searchArray.length > 0) {
      this.setState({displayArray: searchArray})
    }
    if (searchArray.length === 0) {
      this.setState({displayArray: null})
    }
    // browserHistory.push('/directory/');
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
      let nameA = a.lastName.toUpperCase() + a.firstName.toUpperCase(); // ignore upper and lowercase
      let nameB = b.lastName.toUpperCase() + b.firstName.toUpperCase(); // ignore upper and lowercase

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
        <span style={titleBanner} className={css(styles.header)}>Directory</span>
        {/* <div>Directory</div> */}
        <form onSubmit={this.handleSearchButtonClick.bind(this)}>
          <label style={searchBox}>
            <input style={updateButton} className={css(styles.small)} type="text" placeholder="Enter last or single name" onChange={this.handleSearchInputChange.bind(this)} />
            <input style={updateButton} className={css(styles.small)} type="submit" value="Search" />
          </label>
        </form>
        <div style={profileButton}><Button size="sm" style={updateButton} className={css(styles.small)} onClick={this.handleProfileButtonClick.bind(this)}>Enter/update profile</Button></div>
        {/* <DirectoryList entryArray={this.state.displayArray} /> */}
        {this.state.displayArray === null ? <div style={errormsg}> No results found </div> : <DirectoryList entryArray={this.state.displayArray} />  }
        <div style={footer}>Directory courtesy Joan Marie Verba</div>
      </div>
    );
  }
};


// @media only screen and (max-width: 767px) {
//    h1 {
//       font-size: 3em;
//    }
//    h2 {
//       font-size: 2em;
//    }
// }
