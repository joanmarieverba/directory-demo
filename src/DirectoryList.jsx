import React, {Component} from 'react';
import DirectoryItem from './DirectoryItem.jsx';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';
import { browserHistory } from 'react-router';

var directoryStyle = {
    marginTop: "50px",
    marginBottom: '50px',
    WebkitTransition: 'all',
    msTransition: 'all'
 };


export default class DirectoryList extends Component {


  render() {
    console.log("list ", this.props.entryArray);
    return (
      <div style={directoryStyle}>
      {this.props.entryArray.map((item) => {
        return (
          <DirectoryItem
            firstName={item.firstName}
            lastName={item.lastName}
            penName={item.penName}
            street1={item.street1}
            street2={item.street2}
            city={item.city}
            mystate={item.mystate}
            postCode={item.postCode}
            country={item.country}
            phone={item.phone}
            altPhone={item.altPhone}
            email={item.email}
            altEmail={item.altEmail}
            website={item.website}
            agent={item.agent}
            fb={item.fb}
            tw={item.tw}
            credits={item.credits}
            id={item.id}
            key={item.id}/>
        )})}
      </div>
    )
  }
}
