import React, {Component} from 'react';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';
import { browserHistory } from 'react-router';

var endStyle = {
  fontWeight: "bold",
  display: "block",
  padding: "10px",
  width: "75%",
  margin: "0 auto",
  marginBottom: "10px",
  border: "3px solid #73AD21",
  borderRadius: "15px",
  // textAlign: "justify",
  fontFamily: "Verdana",
  fontSize: "14px",
  backgroundColor: "white",
}

export default class ChatItem extends Component {

  render (){
    return (
      <div>
      <h4 style={endStyle}>{this.props.nickname} at {this.props.gmt} GMT -- {this.props.message}</h4>
      </div>
    );
  }
}
