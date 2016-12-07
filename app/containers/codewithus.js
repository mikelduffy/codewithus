import React, {Component} from 'react';
import app from '../index.js';
import Header from '../components/header.js';
import FileNavigator from './filenavigator.js';
import Editor from './editor.js';
import NewFileModal from '../components/newfilemodal.js';
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
      users: [],
      showNewFileModal: false,
      newFileName: ''
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
    };

    this.handleModalClose = () => {
      this.setState({ showNewFileModal: false });
    };

    this.handleModalOpen = () => {
      this.setState({ showNewFileModal: true });
    };

    this.handleNewFileInput = (e) => {
      this.setState({ newFileName: e.target.value });
    };

    this.handleNewFile = () => {
      this.fileService.create({
          name: this.state.newFileName,
          text: ''
      });
      this.setState({
        showNewFileModal: false,
        newFileName: ''
      });
    };

    this.handleLogout = () => {
      app.logout().then(() => window.location.href = '/login.html');
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
      <Grid>
        <Row>
          <Col xs={12}>
            <Header
              onLogout={this.handleLogout}
              />
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <FileNavigator
              onModalOpen={this.handleModalOpen}
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
        </Row>
        <NewFileModal
          newFileName={this.state.newFileName}
          onNewFileInput={this.handleNewFileInput}
          onModalClose={this.handleModalClose}
          onNewFile={this.handleNewFile}
          showNewFileModal={this.state.showNewFileModal}
          />
      </Grid>
    )
  }
};

export default CodeWithUs;
