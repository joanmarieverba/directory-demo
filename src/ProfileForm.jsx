import React, {Component} from 'react';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput, FormRow } from 'elemental';
import { browserHistory } from 'react-router';

var wholeForm = {
  marginLeft : "30px",
  marginRight : "30px",
}

 var sendbutton = {
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
      state: "",
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
      social:'',
      credits:'',
    }
  }
  handleSaveButtonClick(e) {   //method
         //go get more data e.target.value
         //set state, use bind below to insure we get the right value for this
  //set state to new query
    e.preventDefault(); //prevents form submission from deleting current page context
    console.log("name ", this.state.firstName);
    console.log("credits ", this.state.credits);
    console.log ("state ", this.state);
    this.props.onNewMsg.bind(this)(this.state.firstName, this.state.credits);
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
    this.setState({PseudonymName: e.target.value});
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
    this.setState({state: e.target.value});
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

  handleSocialChange(e){
    this.setState({social: e.target.value});
  }

  handleCreditsChange(e){
    //we have a value
    console.log("credits ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({credits: e.target.value});
  }

  render (){
    return (
      <div>
        <div style={wholeForm}>
          <Form type="inline" onSubmit={this.handleSaveButtonClick.bind(this)}>
                <FormRow>
                	<FormField width="one-third" >
                		<FormInput placeholder="Name (first name, middle name, initials...)" name="firstName" onChange={this.handleFirstNameChange.bind(this)} />
                	</FormField>
                  <FormField width="one-third" >
                    <FormInput placeholder="Last name" name="lastName" onChange={this.handleLastNameChange.bind(this)}  />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-half" >
                    <FormInput placeholder="Pseudonym(s)" name="penName" onChange={this.handlePenNameChange.bind(this)}  />
                  </FormField>
                </FormRow>


                <FormRow>
                  <FormField width="one-half">
                	   <FormInput placeholder="Address Line 1" name="street1" onChange={this.handleStreet1Change.bind(this)}  />
                  </FormField>
                </FormRow>
                <FormRow>
                  <FormField width="one-half">
                	 <FormInput placeholder="Address Line 2" name="street2" onChange={this.handleStreet2Change.bind(this)}  />
                   </FormField>
                </FormRow>

                <FormRow>
                	<FormField width="one-third">
                		<FormInput placeholder="City" name="city" onChange={this.handleCityChange.bind(this)}  />
                	</FormField>
                	<FormField width="one-third">
                		<FormInput placeholder="State/Province/Region" name="state" onChange={this.handleStateChange.bind(this)}  />
                	</FormField>
                </FormRow>

                <FormRow>
                	<FormField width="one-third">
                		<FormInput width="one-third" placeholder="Post Code" name="postCode" onChange={this.handlePostCodeChange.bind(this)}  />
                	</FormField>
                	<FormField width="one-third">
                		<FormInput placeholder="Country" name="country" onChange={this.handleCountryChange.bind(this)}  />
                	</FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-third" >
                    <FormInput placeholder="Primary Phone" name="phone" onChange={this.handlePhoneChange.bind(this)}  />
                  </FormField>
                  <FormField width="one-third" >
                    <FormInput placeholder="Alternate Phone" name="altPhone" onChange={this.handleAltPhoneChange.bind(this)}  />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-third" >
                    <FormInput placeholder="email" name="email" onChange={this.handleEmailChange.bind(this)}  />
                  </FormField>
                  <FormField width="one-third" >
                    <FormInput placeholder="alternate email" name="altEmail" onChange={this.handleAltEmailChange.bind(this)}  />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-third" >
                    <FormInput placeholder="website" name="website" onChange={this.handleWebsiteChange.bind(this)}  />
                  </FormField>
                  <FormField width="one-third" >
                    <FormInput placeholder="agent" name="agent" onChange={this.handleAgentChange.bind(this)}  />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-third" >
                    <FormInput placeholder="Facebook" name="fb" onChange={this.handleFBChange.bind(this)}  />
                  </FormField>
                  <FormField width="one-third" >
                    <FormInput placeholder="Twitter" name="tw" onChange={this.handleTWChange.bind(this)}  />
                  </FormField>
                  <FormField width="one-third" >
                    <FormInput placeholder="Other social media" name="social" onChange={this.handleSocialChange.bind(this)}  />
                  </FormField>
                </FormRow>

              <FormRow>
                <FormField width="two-thirds" >
                  <FormInput placeholder="Credits" multiline onChange={this.handleCreditsChange.bind(this)} />
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
