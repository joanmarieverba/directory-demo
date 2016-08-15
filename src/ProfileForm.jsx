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
   float: "right",
 }


export default class ProfileForm extends Component {
  constructor(props) {   //this handles the intital state of the query
    super(props);
    this.state = {
      message: "",
      gmt:''
    }
  }
  handleSaveButtonClick(e) {   //method
         //go get more data e.target.value
         //set state, use bind below to insure we get the right value for this
  //set state to new query
    e.preventDefault(); //prevents form submission from deleting current page context
    console.log("gmt ", this.state.enteredGmt);
    console.log("message ", this.state.enteredMessage);
    // this.props.onNewMsg.bind(this)(this.state.enteredGmt, this.state.enteredMessage);
    browserHistory.push('/confirm/');
  }
  handleMessageChange(e){
    //we have a value
    console.log("message ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({enteredMessage: e.target.value});
  }
  handleGmtChange(e){
    //we have a value
    console.log("GMT ", e.target.value);
    //call another function which actually changes the state being sent into retriever
    this.setState({enteredGmt: e.target.value});
  }

  render (){
    return (
      <div>
        <div style={wholeForm}>
          <Form type="inline" onSubmit={this.handleSaveButtonClick.bind(this)}>
                <FormRow>
                	<FormField width="one-third" >
                		<FormInput placeholder="Name" name="name" />
                	</FormField>
                  <FormField width="one-third" >
                    <FormInput placeholder="Pseudonym(s)" name="penName" />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-half">
                	   <FormInput placeholder="Address Line 1" name="address-street1" />
                  </FormField>
                </FormRow>
                <FormRow>
                  <FormField width="one-half">
                	 <FormInput placeholder="Address Line 2" name="address-street2" />
                   </FormField>
                </FormRow>

                <FormRow>
                	<FormField width="one-third">
                		<FormInput placeholder="City" name="city" />
                	</FormField>
                	<FormField width="one-third">
                		<FormInput placeholder="State" name="state" />
                	</FormField>
                	<FormField width="one-third">
                		<FormInput width="one-third" placeholder="Post Code" name="city" />
                	</FormField>
                	<FormField width="one-third">
                		<FormInput placeholder="Country" name="country" />
                	</FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-third" >
                    <FormInput placeholder="Primary Phone" name="phone" />
                  </FormField>
                  <FormField width="one-third" >
                    <FormInput placeholder="Alternate Phone" name="altPhone" />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-third" >
                    <FormInput placeholder="email" name="email" />
                  </FormField>
                  <FormField width="one-third" >
                    <FormInput placeholder="alternate email" name="altEmail" />
                  </FormField>
                </FormRow>

                <FormRow>
                  <FormField width="one-third" >
                    <FormInput placeholder="website" name="website" />
                  </FormField>
                  <FormField width="one-third" >
                    <FormInput placeholder="agent" name="agent" />
                  </FormField>
                </FormRow>

              <FormRow>
                <FormField width="two-thirds" >
                  <FormInput placeholder="Credits" multiline />
                </FormField>
              </FormRow>

                <Row>
                  <Col>
                    <Button size="sm" style={sendbutton} onClick={this.handleSaveButtonClick.bind(this)}>Save</Button>
                  </Col>
                </Row>
              </Form>

          </div>
      </div>
    );
  }
}
