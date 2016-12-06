import React, {Component, PropTypes} from 'react';
import CodeMirror from 'react-codemirror';

class Editor extends Component {
  constructor(props){
    super(props);
    this.options = {
      lineNumbers: true,
      tabSize: 2,
      lineWrapping: true
    };
  };

  render() {
    return (
      <CodeMirror
        value={this.props.content}
        onChange={this.props.onContentUpdate}
        options={this.options}
        />
    )
  };
};

Editor.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onContentUpdate: PropTypes.func.isRequired
};

export default Editor;
