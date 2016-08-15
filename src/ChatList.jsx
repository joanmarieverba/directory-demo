import React, {Component} from 'react';
import ChatItem from './ChatItem.jsx';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';
import { browserHistory } from 'react-router';

var chatStyle = {
    marginTop: "30px",
    marginBottom: '50px',
    WebkitTransition: 'all',
    msTransition: 'all'
 };


export default class ChatList extends Component {


  render() {
    console.log("chatlist ", this.props.messageArray);
    return (
      <div style={chatStyle}>
      {this.props.messageArray.map((item) => {
        return (
          <ChatItem nickname={item.nickname} gmt={item.gmt} message={item.message} key={item.id}/>
        )})}
      </div>
    )
  }
}
