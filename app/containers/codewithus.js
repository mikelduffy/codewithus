import React, {Component} from 'react';
import app from '../index.js';
// import Header from './components/header.js';
// import UserList from './userlist.js';
import FileNavigator from './filenavigator.js';
import Editor from './editor.js';
import {Grid, Row, Col} from 'react-bootstrap';

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

    this.handleFileClick = (clickedFile) => {
      const file = this.state.files.filter((file) => clickedFile._id === file._id)[0];
      this.setState({
        currentFileId: file._id,
        currentFileTitle: file.name,
        currentFileContent: file.text
      });
    }

    this.handleNewFile = (name) => {

    }
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
      <Grid>
        <Col xs={2}>
          <FileNavigator
            onNewFile={this.handleNewFile}
            onFileClick={this.handleFileClick}
            files={this.state.files}
            users={this.state.users}
            currentFileId={this.state.currentFileId}
            />
        </Col>
        <Col xs={10}>
          <Editor
            title={this.state.currentFileTitle}
            content={this.state.currentFileContent}
            onContentUpdate={this.handleContentUpdate}
            />
        </Col>
      </Grid>
    )
  }
};

export default CodeWithUs;
