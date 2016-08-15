import React, {Component} from 'react';

export default class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

    // When new or existing data comes back from the
    // server, set the new state of our messages
    // to the result from the server
    props.chat.watch().subscribe((result) => {
      this.setState({messages: result});
    })
  }

  render() {

    return (
      <div>
        {this.state.messages.map(function(message){
          return (
            <div key={message.id}>
              {message.author} : {message.text}
            </div>
          );
        })}
      </div>
    );
  }
}
