import React, { Component } from 'react';
import globalStyles from "./assets/styles/global.css";

var errorPage = {
    backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/08/spatiul-cosmic.jpg")',
   //  position: "fixed",
    width: "100%",
    minHeight: "100%",
};
var errorMsg = {
    paddingTop: "50px",
    textAlign: "center",
    color: "yellow",
    fontFamily: "Bungee",
    WebkitTextStroke: "1px black",
 };

export default class NoMatch extends Component {
  render() {
    return (
      <div style={errorPage}>
        <h2 style={errorMsg}>Not a chat page, but feel free to admire the background</h2>
        <h4 style={errorMsg}>You probably want to <a href="/">start over</a></h4>
      </div>
    );
  }
}
