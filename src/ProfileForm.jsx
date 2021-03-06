import React, {Component} from 'react';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput, FormRow } from 'elemental';
import { browserHistory } from 'react-router';
import stores from './stores.jsx';
import {directory} from './stores.jsx';

const wholeForm = {
  color: "white",
  fontFamily: "Arial",
  fontWeight: "bold",
  marginLeft : "30px",
  marginRight : "30px",
}

 const sendbutton = {
   marginRight: "130px",
   marginLeft: "5px",
   float: "left",
   marginBottom: "100px",
 }


export default class ProfileForm extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      penName: "",
      street1: "",
      street2: "",
      city: "",
      mystate: "",
      postCode: "",
      country: "",
      phone: "",
      altPhone: "",
      email: "",
      altEmail: "",
      website:'',
      agent:'',
      fb:'',
      tw:'',
      credits:'',
    }
    directory.fetch().subscribe( (results) => {
        this.setState({
             entryArray: results
           });
    });
    directory.find({id: this.props.id}).fetch().subscribe(user => {this.setState({
      firstName : user.firstName,
      lastName: user.lastName,
      penName: user.penName,
      street1: user.street1,
      street2: user.street2,
      city: user.city,
      mystate: user.mystate,
      postCode: user.postCode,
      country: user.country,
      phone: user.phone,
      altPhone: user.altPhone,
      email: user.email,
      altEmail: user.altEmail,
      website: user.website,
      agent: user.agent,
      fb: user.fb,
      tw: user.tw,
      credits: user.credits,
    })
    console.log("user ", user);
   });
  }
  handleSaveButtonClick(e) {   //method
         //go get more data e.target.value
         //set state, use bind below to insure we get the right value for this
  //set state to new query
    e.preventDefault(); //prevents form submission from deleting current page context
    console.log("name ", this.state.firstName);
    console.log("credits ", this.state.credits);
    console.log ("state ", this.state);
    this.props.onNewMsg.bind(this)
      (this.state.firstName,
       this.state.lastName,
       this.state.penName,
       this.state.street1,
       this.state.street2,
       this.state.city,
       this.state.mystate,
       this.state.postCode,
       this.state.country,
       this.state.phone,
       this.state.altPhone,
       this.state.email,
       this.state.altEmail,
       this.state.website,
       this.state.agent,
       this.state.fb,
       this.state.tw,
       this.state.credits);
    browserHistory.push('/confirm/');
  }

  handleFirstNameChange(e){
    //we have a value
    console.log("Name changed ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({firstName: e.target.value});
  }

  handleLastNameChange(e){
    this.setState({lastName: e.target.value});
  }

  handlePenNameChange(e){
    this.setState({penName: e.target.value});
  }

  handleStreet1Change(e){
    this.setState({street1: e.target.value});
  }

  handleStreet2Change(e){
    this.setState({street2: e.target.value});
  }

  handleCityChange(e){
    this.setState({city: e.target.value});
  }

  handleStateChange(e){
    this.setState({mystate: e.target.value});
  }

  handlePostCodeChange(e){
    this.setState({postCode: e.target.value});
  }

  handleCountryChange(e){
    this.setState({country: e.target.value});
  }

  handlePhoneChange(e){
    this.setState({phone: e.target.value});
  }

  handleAltPhoneChange(e){
    this.setState({altPhone: e.target.value});
  }

  handleEmailChange(e){
    this.setState({email: e.target.value});
  }

  handleAltEmailChange(e){
    this.setState({altEmail: e.target.value});
  }

  handleWebsiteChange(e){
    this.setState({website: e.target.value});
  }

  handleAgentChange(e){
    this.setState({agent: e.target.value});
  }

  handleFBChange(e){
    this.setState({fb: e.target.value});
  }

  handleTWChange(e){
    this.setState({tw: e.target.value});
  }

  handleCreditsChange(e){
    //we have a value
    console.log("credits ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({credits: e.target.value});
  }

  render (){
    console.log("we made it");
    return (
      <div>
        <div style={wholeForm}>
          <Form type="inline" onSubmit={this.handleSaveButtonClick.bind(this)}>
                <FormRow>
                	<FormField width="one-third" >
                    First Name (plus middle name, initials, if used):
                		<FormInput value={this.state.firstName} name="firstName" onChange={this.handleFirstNameChange.bind(this)} />
                	</FormField>
                  <FormField width="one-third" >
                    Last Name or Single Name:
                    <FormInput value={this.state.lastName} name="lastName" onChange={this.handleLastNameChange.bind(this)}  />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-half" >
                    Pseudonym(s):
                    <FormInput value={this.state.penName} name="penName" onChange={this.handlePenNameChange.bind(this)}  />
                  </FormField>
                </FormRow>


                <FormRow>
                  <FormField width="one-half">
                     Address (line 1):
                	   <FormInput value={this.state.street1}  name="street1" onChange={this.handleStreet1Change.bind(this)}  />
                  </FormField>
                </FormRow>
                <FormRow>
                  <FormField width="one-half">
                   Address (line 2):
                	 <FormInput value={this.state.street2} name="street2" onChange={this.handleStreet2Change.bind(this)}  />
                   </FormField>
                </FormRow>

                <FormRow>
                	<FormField width="one-third">
                    City:
                		<FormInput value={this.state.city} name="city" onChange={this.handleCityChange.bind(this)}  />
                	</FormField>
                	<FormField width="one-third">
                    State/Province/Region:
                		<FormInput value={this.state.mystate} name="mystate" onChange={this.handleStateChange.bind(this)}  />
                	</FormField>
                </FormRow>

                <FormRow>
                	<FormField width="one-third">
                    Postal Code:
                		<FormInput width="one-third" value={this.state.postCode} name="postCode" onChange={this.handlePostCodeChange.bind(this)}  />
                	</FormField>
                	<FormField width="one-third">
                    Country:
                		<FormInput value={this.state.country} name="country" onChange={this.handleCountryChange.bind(this)}  />
                	</FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-third" >
                    Primary phone:
                    <FormInput value={this.state.phone} name="phone" onChange={this.handlePhoneChange.bind(this)}  />
                  </FormField>
                  <FormField width="one-third" >
                    Alternate Phone:
                    <FormInput value={this.state.altPhone} name="altPhone" onChange={this.handleAltPhoneChange.bind(this)}  />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-third" >
                    Primary email:
                    <FormInput value={this.state.email} name="email" onChange={this.handleEmailChange.bind(this)}  />
                  </FormField>
                  <FormField width="one-third" >
                    Alternate email:
                    <FormInput value={this.state.altEmail} name="altEmail" onChange={this.handleAltEmailChange.bind(this)}  />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-third" >
                    Website(s):
                    <FormInput value={this.state.website} name="website" onChange={this.handleWebsiteChange.bind(this)}  />
                  </FormField>
                  <FormField width="one-third" >
                    Agent:
                    <FormInput value={this.state.agent} name="agent" onChange={this.handleAgentChange.bind(this)}  />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-third" >
                    Social media link:
                    <FormInput value={this.state.fb} name="fb" onChange={this.handleFBChange.bind(this)}  />
                  </FormField>
                  <FormField width="one-third" >
                    Second social media link:
                    <FormInput value={this.state.tw} name="tw" onChange={this.handleTWChange.bind(this)}  />
                  </FormField>
                </FormRow>

              <FormRow>
                <FormField width="two-thirds" >
                  Credits (tie-in works only: novels, short stories, audio, etc.):
                  <FormInput value={this.state.credits} multiline onChange={this.handleCreditsChange.bind(this)} />
                </FormField>
              </FormRow>

                <Row>
                  <Col>
                    <Button size="sm" style={sendbutton} name="credits" onClick={this.handleSaveButtonClick.bind(this)}>Save</Button>
                  </Col>
                </Row>
              </Form>

          </div>
      </div>
    );
  }
}
