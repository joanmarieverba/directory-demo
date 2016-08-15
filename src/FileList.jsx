import React, {Component} from 'react';

export default class FileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };

    // When new or existing data comes back from the
    // server, set the new state of our files
    // to the result from the server
    props.files.watch().subscribe((result) => {
      this.setState({files: result});
    })
  }

  render() {
    return (
      <div>
        {this.state.files.map(function(file){
          return (
            <div key={file.id}>
              {file.author} : {file.filename}
            </div>
          );
        })}
      </div>
    );
  }
}
