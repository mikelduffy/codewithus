import React, { PropTypes } from 'react'
import {Modal, Button, FormGroup, FormControl} from 'react-bootstrap';

const NewFileModal = (props) => {
  return (
    <Modal show={props.showNewFileModal} onHide={props.onModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a new file</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <FormControl
            type="text"
            value={props.newFileName}
            placeholder="Enter a file name"
            onChange={props.onNewFileInput}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          bsStyle="primary"
          type="submit"
          onClick={props.onNewFile}
        >
          Submit
        </Button>
        <Button onClick={props.onModalClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
};

NewFileModal.propTypes = {
  onNewFileInput: PropTypes.func.isRequired,
  newFileName: PropTypes.string.isRequired,
  showNewFileModal: PropTypes.bool.isRequired,
  onNewFile: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired
};

export default NewFileModal;
