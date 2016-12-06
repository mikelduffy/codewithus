import React, { PropTypes } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const FileNavigator = (props) => {
  return (
    <div>
    <ListGroup>
      <ListGroupItem>
        New File
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
  onNewFile: PropTypes.func.isRequired
};

export default FileNavigator;
