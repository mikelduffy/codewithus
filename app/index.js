import React, {Component} from 'react';
import { render } from 'react-dom';
import Editor from './containers/editor';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');
require('./styles.scss');

if (module.hot) {
  module.hot.accept();
}

const socket = io();
const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    storage: window.localStorage
  }));

class CodeWithUs extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentFileId: '',
      currentFileTitle: '',
      currentFileContent: '',
      files: [],
      folders: [],
      users: []
    };

    this.userService = app.service('users');
    this.fileService = app.service('files');

    this.handleContentUpdate = (newContent) => {
      console.log(newContent);

      this.setState({
        currentFileContent: newContent,
      });

      this.fileService.patch(
        this.state.currentFileId,
        {text: newContent},
        (res) => console.log(res)
      );
    };
  };

  componentDidMount() {
    this.fileService.find({
      query: {
        $limit: this.props.limit || 100
      }
    }).then(files => {
      console.log(files);
      this.setState({
        files: files.data,
        currentFileId: files.data[0]._id,
        currentFileTitle: files.data[0].name,
        currentFileContent: files.data[0].text
       })
      console.log(this.state);
    });

    this.fileService.on('created', file => {
      this.setState({
        files: this.state.files.concat(message)
      });
    });

    this.fileService.on('patched', file => {
      if (file._id === this.state.currentFileId) {
        this.setState({
          currentFileContent: file.text
        });
      }
    });
  }

  render(){
    return (
      <div>
        <Editor
          title={this.state.currentFileTitle}
          content={this.state.currentFileContent}
          onContentUpdate={this.handleContentUpdate}
          />
      </div>
    )
  }
};

app.authenticate().then(() => {
  render(<CodeWithUs />, document.getElementById('app'));
}).catch(error => {
  if(error.code === 401) {
    window.location.href = '/login.html'
  }
  console.error(error);
});
