import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import globalStyles from './assets/styles/global.css';
// import normalizeStyles from 'normalize.css';

import {chat, files} from './stores.jsx'; // references to databases

import MessageList from './MessageList';
import FileList from './FileList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText:''
    }
  }
  handleMessageChange(e) {
    this.setState({messageText: e.target.value});
  }
  handleAddMessageClick() {
    var now = new Date();
    chat.store({
      author: 'Jim Cummins',
      text: this.state.messageText,
      datetime: now.getTime()
    })
  }
  handleAddFileClick() {
    var now = new Date();
    files.store({
      author: 'Prancy McPrancerson',
      filename: 'testfile.txt',
      datetime: now.getTime()
    })
  }
  handleClearMessageClick() {
    chat.fetch().subscribe( function(allMessages) {
      chat.removeAll(allMessages)
    })
  }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <input type="text" onChange={this.handleMessageChange.bind(this)} />
        <input type="button" value="Add message" onClick={this.handleAddMessageClick.bind(this)} />
        <input type="button" value="Clear messages" onClick={this.handleClearMessageClick.bind(this)} />
        <MessageList chat={chat} />

        <br /><br/>
        <input type="button" value="Add file" onClick={this.handleAddFileClick.bind(this)} />
        <FileList files={files} />
      </div>
    );
  }
}

// class MessageList extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       messages: []
//     };
//
//     // When new or existing data comes back from the
//     // server, set the new state of our messages
//     // to the result from the server
//     this.props.chat.watch().subscribe((result) => {
//       this.setState({messages: result});
//     })
//   }
//
//   render() {
//
//     return (
//       <div>
//         {this.state.messages.map(function(message){
//           return (
//             <div key={message.id}>
//               {message.author} : {message.text}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
