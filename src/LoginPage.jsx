import React, {Component} from 'react';
import { browserHistory } from 'react-router';

    // browserHistory.push('/chat/nickname')

var logInPageStyle = {
  // backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/07/cityscape7.jpg")',
  backgroundColor: "green",
  width: '100%',
  minHeight: '100%',
}

var topBanner = {
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

var instructions = {
  paddingTop: "75px",
  paddingLeft: "50px",
  paddingRight: "50px",
  fontFamily: 'Bungee',
  color: "lightgreen",
  textAlign: "center",
  display: "inline-block",
  fontSize: "32px",
  fontWeight: "bold",
  WebkitTextStroke: "1px black",
}

var inputBox = {
  paddingTop: "100px",
  display: "inline-block",
  fontFamily: "Arial",
  fontSize: "12px",
  fontWeight: "bold",
  margin: "0 auto",
  paddingLeft: "400px",
}

export default class LoginPage extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      id: "",
      enteredId:''
    }
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
  handleSearchInputChange(e){
    //we have a value
    console.log("target ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({enteredId: e.target.value});
  }
  render() {


    return (
      <div style={logInPageStyle} >
      <span style={topBanner}>Welcome to the Directory Database</span>
      <span style={instructions} > Enter your id to begin and click the Enter button: </span>
{/* //submit responds to return or click */}
      <form onSubmit={this.handleSubmitButtonClick.bind(this)}>
        <label  style={inputBox}>
          <input type="text" placeholder="Enter id" onChange={this.handleSearchInputChange.bind(this)} />
          <input type="submit" value="Enter" />
        </label>
      </form>
      </div>
    );
  }
};
