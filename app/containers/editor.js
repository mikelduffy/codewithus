import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';

class Editor extends Component {
  constructor(props){
    super(props);
  };

  render() {
    const options = {
      lineNumbers: true,
    };
    return (
      <CodeMirror
        value={this.props.content}
        onChange={this.props.onContentUpdate}
        options={options}
        />
    )
  };
};

export default Editor;
