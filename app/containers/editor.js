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
    if (/(.js$)/.exec(this.props.title) !== null) {
      this.options.mode = 'javascript';
    } else if (/(.jsx$)/.exec(this.props.title) !== null) {
      this.options.mode = 'jsx';
    } else if (/(.html$)/.exec(this.props.title) !== null) {
      this.options.mode = 'html';
    } else if (/(.md$)/.exec(this.props.title) !== null) {
      this.options.mode = 'md';
    } else if (/(.css$)/.exec(this.props.title) !== null) {
      this.options.mode = 'css';
    } else {
      this.options.mode = undefined;
    }

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
