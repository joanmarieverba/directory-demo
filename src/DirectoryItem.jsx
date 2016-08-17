import React, {Component} from 'react';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';
import { browserHistory } from 'react-router';

var listStyle = {
  fontWeight: "bold",
  display: "block",
  padding: "10px",
  width: "50%",
  margin: "0 auto",
  marginBottom: "10px",
  border: "3px solid #73AD21",
  borderRadius: "15px",
  // textAlign: "justify",
  fontFamily: "Verdana",
  fontSize: "14px",
  backgroundColor: "white",
}

export default class DirectoryItem extends Component {

  render (){
    return (
      <div>
        <h4 style={listStyle}>
          <div>{this.props.firstName} {this.props.lastName}</div>
          <div>{this.props.penName}</div>
          <div>{this.props.street1}</div>
          <div>{this.props.street2}</div>
          <div>{this.props.city} {this.props.mystate} {this.props.postCode} {this.props.country}</div>
          <div>{this.props.phone} {this.props.altPhone}</div>
          <div>{this.props.email} {this.props.altEmail}</div>
          <div>{this.props.website}</div>
          <div>Agent: {this.props.agent}</div>
          <div>{this.props.fb}</div>
          <div>{this.props.tw}</div>
          <div>{this.props.social}</div>
          <div>{this.props.credits}</div>
        </h4>
      </div>
    );
  }
}
