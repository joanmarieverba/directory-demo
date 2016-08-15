import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import globalStyles from './assets/styles/global.css';
// import normalizeStyles from 'normalize.css';

// KEEP IN THE FILE WHERE REACTDOM.RENDER IS CALLED
// npm install --save @horizon/client
import Horizon from '@horizon/client';

// Creat an instance of Horizon, passing a config object
const horizon = Horizon({
  secure: false,
  host: 'localhost:8181'
});
const chat = horizon('messages');
// KEEP IN THE FILE WHERE REACTDOM.RENDER IS CALLED

//this initiates our 'messages' collection inside of our Rethinkdb


class App extends Component {
  constructor(props) {
    super(props);
  }
  handleAddClick() {
    var now = new Date();
    chat.store({
      author: 'Jim Cummins',
      text: 'test message',
      datetime: now.getTime()
    })
  }
  handleClearClick() {
    chat.fetch().subscribe( function(allMessages) { chat.removeAll(allMessages) })
  }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <input type="button" value="Add message" onClick={this.handleAddClick.bind(this)} />
        <input type="button" value="Clear messages" onClick={this.handleClearClick.bind(this)} />
        <MessageList chat={chat} />
      </div>
    );
  }
}

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

    // When new or existing data comes back from the
    // server, set the new state of our messages
    // to the result from the server
    this.props.chat.watch().subscribe((result) => {
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
