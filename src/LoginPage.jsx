import React, {Component} from 'react';
import { browserHistory } from 'react-router'; 
import {key} from './config.js';
//require('dotenv').config();
//let key = process.env.REACT_APP_SECRET;

const logInPageStyle = {
  // backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/08/background-1430105_1280.png")',
  //backgroundImage: 'url("/src/assets/images/tablet-new.jpg")',
  backgroundColor: "green",
  width: '100%',
  minHeight: '100%',
  backgroundSize: "100%",
}

const topBanner = {
   width : "100%",
   position: "fixed",
   textAlign: "center",
   fontFamily: 'Orbitron',
   color: "black",
  //  fontSize: "36px",
   fontSize: "3.1vw",
   top: "0",
   left : "0",
   border: "3px solid #73AD21",
   backgroundColor: "aqua",
   WebkitTransition: 'all',
   msTransition: 'all'
 }

const instructions = {
  paddingTop: "75px",
  // paddingLeft: "50px",
  // paddingRight: "50px",
  fontFamily: 'Arial',
  color: "orangered",
  textAlign: "center",
  // display: "inline-block",
  // fontSize: "32px",
  fontSize: "2.5vw",
  // fontWeight: "bold",
  // WebkitTextStroke: "1px black",
}

const forgotid = {
  color: "chartreuse",
  fontFamily: "Verdana",
  fontSize: "2vw",
  paddingTop: "50px",
  paddingBottom: "20px",
  textAlign: "center",
  // fontWeight: "bold",
}

const inputBox = {
  paddingTop: "40px",
  display: "block",
  textAlign: "center",
  fontFamily: "Arial",
  // fontSize: "12px",
  fontSize: "1.2vw",
  fontWeight: "bold",
  margin: "0 auto",
  // paddingLeft: "400px",
}

const inputTxt = {
  color: "black",
  border: "2px solid black",
  fontWeight: "bold",
}

export default class LoginPage extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      id: "",
      enteredId:'',
      authorized: false,
    }
    this.handleCheckPassword = this.handleCheckPassword.bind(this)
  }

  handleCheckPassword(e) {   //method
    //go get more data e.target.value
    //set state, use bind below to insure we get the right value for this
    //set state to new query
    e.preventDefault(); //prevents form submission from deleting current page context
    console.log("password", this.state.password);
    console.log("saved password", key);
    if (this.state.password === key){
      this.setState ({
        authorized: true,
        password: '',
      })
    }
  }
  password(e) {
    //we have a value
    console.log("target ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({ password: e.target.value });
  }


  handleSubmitButtonClick(e) {   //method
         //go get more data e.target.value
         //set state, use bind below to insure we get the right value for this
  //set state to new query
    e.preventDefault(); //prevents form submission from deleting current page context
    console.log("id entered", this.state.enteredId);
    localStorage.setItem("userid", this.state.enteredId);
    browserHistory.push('/directory/');
  }
  handleIdInputChange(e){
    //we have a value
    console.log("target ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({enteredId: e.target.value});
  }


  render() {


    return (
      <div style={logInPageStyle} >
      <span style={topBanner}>Welcome to the Directory Database</span>
      <div style={instructions}>Enter the group password and click the Enter button to begin:</div>
      <div><h5 style={forgotid}>Questions? Comments? Forgot id? Contact Joan at verba001@gmail.com</h5></div>
      
      <form onSubmit={this.handleCheckPassword.bind(this)}>
          <label style={inputBox}>
            <input type="text" style={inputTxt} placeholder="Enter group password" onChange={this.password.bind(this)} />
            <input type="submit" style={inputTxt} value="Enter" />
          </label>
      </form>
      


      {this.state.authorized === true && 
          <form onSubmit={this.handleSubmitButtonClick.bind(this)}>
            <label style={inputBox}>
              <div><h5 style={forgotid}>Enter your personal ID</h5></div>
              <input type="text" style={inputTxt} placeholder="Enter id" onChange={this.handleIdInputChange.bind(this)} />
              <input type="submit" style={inputTxt} value="Enter" />
            </label>
          </form>
      }
      </div>
    );
  }
};
