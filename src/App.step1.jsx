import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import globalStyles from './assets/styles/global.css';
// import normalizeStyles from 'normalize.css';

// npm install --save @horizon/client
import Horizon from '@horizon/client';

// Create an instance of Horizon, passing a config object
const horizon = Horizon({
  secure: false,
  host: 'localhost:8181'
});

//this initiates our 'messages' collection inside of our Rethinkdb
const chat = horizon('messages');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    // When new or existing data comes back from the
    // server, set the new state of our messages
    // to the result from the server
    chat.watch().subscribe((result) => {
      this.setState({messages: result});
    })
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
