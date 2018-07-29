import React, { Component } from 'react';
import globalStyles from "./assets/styles/global.css";
import Scenery from "./assets/images/Image266-scenery.jpg";

const errorPage = {
   backgroundImage: `url(${Scenery})`,
   // backgroundColor: "midnightblue",
   //position: "fixed",
   // width: "100%",
   // height: "100vh",
    objectFit: "cover",
  backgroundSize: "100%",
  width: '100%',
  minHeight: '100%',
};

const errorMsg = {
    paddingTop: "50px",
    textAlign: "center",
    color: "gold",
    fontFamily: "Verdana",
    fontWeight: "bold",
    //WebkitTextStroke: "1px black",
 };

 const linkColor = {
   color: "midnightblue",
 }

export default class NoMatch extends Component {
  render() {
    return (
      <div style={errorPage}>
        <h2 style={errorMsg}>Not a directory page, but feel free to admire the background</h2>
        <h4 style={errorMsg}>You probably want to <a style={linkColor} href="/">start over</a></h4>
      </div>
    );
  }
}
