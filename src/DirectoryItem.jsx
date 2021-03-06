import React, {Component} from 'react';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';
import { browserHistory } from 'react-router';
import stores from './stores.jsx';
import {directory} from './stores.jsx';
import { StyleSheet, css } from 'aphrodite';

const listStyle = {
  fontWeight: "bold",
  display: "block",
  padding: "10px",
  width: "45%",
  margin: "0 auto",
  marginBottom: "10px",
  border: "3px solid #73AD21",
  borderRadius: "15px",
  lineHeight: 1.3,
  fontFamily: "Verdana",
  fontSize: "14px",
  backgroundColor: "white",
}

const printStyle = StyleSheet.create({
  border: {
        "@media print" : {
             border: "0",
        }
    }
});

const delButton = {
  display: "inline-block",
  border: "1px solid black",
}

const deleteButton = {
  backgroundColor: "green",
}

export default class DirectoryItem extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      userid : localStorage.getItem('userid'),  //this.state.userid
    }
  }

  handleDeleteButtonClick(e) {   //method
         //go get more data e.target.value
         //set state, use bind below to insure we get the right value for this
  //set state to new query
    e.preventDefault(); //prevents form submission from deleting current page context
    var adminid = this.state.userid;
    directory.remove({id: this.props.id});
    console.log("delete button clicked", adminid);
    browserHistory.push('/confirm/');
  }

  render (){
    let lines = this.props.credits;
    let formatted = lines.split("\n").map(function(item, index) {
            return (
              <span key={index}>  {item}  <br/> </span>
                 )
    });
    return (
      <div>
        <h4 style={listStyle}  className={css(printStyle.border)}>
          {/* if condition is true, display the div, otherwise, don't display anything */}
          {this.state.userid === "activeadmin42" ? <div style={delButton}><Button size="sm" style={deleteButton} onClick={this.handleDeleteButtonClick.bind(this)}>Delete this record</Button></div> : null }
          {this.state.userid === "activeadmin42" ? <div>ID: {this.props.id}</div> : null }
          <div>{this.props.firstName} {this.props.lastName}</div>
          {this.props.penName !== "" ? <div>Writing as: {this.props.penName}</div> : null }
          <div>{this.props.street1}</div>
          <div>{this.props.street2}</div>
          <div>{this.props.city} {this.props.mystate} {this.props.postCode} {this.props.country}</div>
          <div>{this.props.phone} {this.props.altPhone}</div>
          <div>{this.props.email} {this.props.altEmail}</div>
          <div>{this.props.website}</div>
          {this.props.agent !== "" ? <div>Agent: {this.props.agent}</div> : null }
          <div>{this.props.fb}</div>
          <div>{this.props.tw}</div>
          <div>{ formatted }</div>
          {/* <div>{this.props.credits}</div> */}
        </h4>
      </div>
    );
  }
}
