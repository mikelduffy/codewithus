import React, {Component} from 'react';
import app from '../index.js';
// import Header from './components/header.js';
// import UserList from './userlist.js';
import FileNavigator from './filenavigator.js';
import Editor from './editor.js';

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
      this.fileService.patch(
        this.state.currentFileId,
        {text: newContent}
      );
    };
  };

  componentDidMount() {
    this.fileService.find({
      query: {
        $limit: this.props.limit || 100
      }
    }).then(files => {
      this.setState({
        files: files.data,
        currentFileId: files.data[0]._id,
        currentFileTitle: files.data[0].name,
        currentFileContent: files.data[0].text
       })
    });

    this.fileService.on('created', file => {
      this.setState({
        files: this.state.files.concat(file)
      });
    });

    this.fileService.on('patched', file => {
      if (file._id === this.state.currentFileId) {
        this.setState({
          currentFileContent: file.text
        });
      }
      this.setState({
        files: this.state.files.map((existingFile) => {
          return file._id === existingFile._id ? file : existingFile;
        })
      });
    });
  }

  render(){
    return (
      <div>
        <FileNavigator
          files={this.state.files}
          users={this.state.users}
          currentFileId={this.state.currentFileId}
          />
        <Editor
          title={this.state.currentFileTitle}
          content={this.state.currentFileContent}
          onContentUpdate={this.handleContentUpdate}
          />
      </div>
    )
  }
};

export default CodeWithUs;
