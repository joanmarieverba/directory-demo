import React, {Component} from 'react';
import DirectoryItem from './DirectoryItem.jsx';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput } from 'elemental';
import { browserHistory } from 'react-router';
import { StyleSheet, css } from 'aphrodite';

var directoryStyle = {
    marginTop: "10px",
    marginBottom: '50px',
    WebkitTransition: 'all',
    msTransition: 'all'
 };

 var printButton = {
   height: '28px',
   textAlign: 'center',
   color: "black",
   border: "2px solid black",
   fontWeight: "bold",
   display: "block",
   margin: "0 auto",
}

const printbtn = StyleSheet.create({
  btn: {
    '@media (max-width: 800px)': {
      fontSize: '2vw',
      marginTop: '3vw',
    },
    "@media print" : {
        display: "none",
    }
  }
});

export default class DirectoryList extends Component {

  handlePrintButtonClick(e) {   //method
    e.preventDefault(); //prevents form submission from deleting current page context
    window.print();
  }

  render() {
    console.log("list ", this.props.entryArray);
    return (
      <div style={directoryStyle}>
      <div><Button size="sm" style={printButton} className={css(printbtn.btn)} onClick={this.handlePrintButtonClick.bind(this)}>Print this page</Button></div>
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
