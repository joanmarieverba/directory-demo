import React, { Component } from 'react';
import globalStyles from "./assets/styles/global.css";
import Forest from "./assets/images/forest.jpg";

var errorPage = {
   backgroundImage: `url(${Forest})`,
   // backgroundColor: "midnightblue",
   //position: "fixed",
   // width: "100%",
   // height: "100vh",
    objectFit: "cover",
  backgroundSize: "100%",
  width: '100%',
  minHeight: '100%',
};
var errorMsg = {
    paddingTop: "50px",
    textAlign: "center",
    color: "gold",
    fontFamily: "Verdana",
    fontWeight: "bold",
    //WebkitTextStroke: "1px black",
 };

export default class NoMatch extends Component {
  render() {
    return (
      <div style={errorPage}>
        <h2 style={errorMsg}>Not a directory page, but feel free to admire the background</h2>
        <h4 style={errorMsg}>You probably want to <a href="/">start over</a></h4>
      </div>
    );
  }
}
