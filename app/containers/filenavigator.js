import React, { PropTypes } from 'react';
import {ListGroup, ListGroupItem, Button, Glyphicon} from 'react-bootstrap';

const FileNavigator = (props) => {
  return (
    <div>
    <ListGroup>
      <ListGroupItem className="text-center">
      <Button
          bsStyle="primary"
          bsSize="large"
          onClick={props.onModalOpen}
        >
          <Glyphicon glyph="file" />
          <Glyphicon glyph="plus" />
        </Button>
      </ListGroupItem>
      {props.files.map((file, key) => {
        const active = file._id === props.currentFileId
        return <ListGroupItem href="#!" key={key} active={active} onClick={() => props.onFileClick(file) }>{file.name}</ListGroupItem>
      })}
    </ListGroup>
    </div>
  )
}

FileNavigator.propTypes = {
  files: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  currentFileId: PropTypes.string.isRequired,
  onFileClick: PropTypes.func.isRequired,
  onNewFile: PropTypes.func.isRequired,
  onModalOpen: PropTypes.func.isRequired
};

export default FileNavigator;
