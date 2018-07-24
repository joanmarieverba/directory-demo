import React, { Component } from 'react';
import globalStyles from "./assets/styles/global.css";

var errorPage = {
    //backgroundImage: 'url("./src/assets/images/computer-desk.jpg")',
    backgroundColor: "midnightblue",
   //  position: "fixed",
    width: "100%",
    minHeight: "100%",
};
var errorMsg = {
    paddingTop: "50px",
    textAlign: "center",
    color: "white",
    fontFamily: "Verdana",
    fontWeight: "bold",
    // WebkitTextStroke: "1px black",
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
