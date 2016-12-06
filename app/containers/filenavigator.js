import React, { PropTypes } from 'react'

const FileNavigator = (props) => {
  return (
    <div />
  )
}

FileNavigator.propTypes = {
  files: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  currentFileId: PropTypes.string.isRequired
};

export default FileNavigator;
