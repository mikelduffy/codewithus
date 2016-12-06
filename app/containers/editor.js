import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';

class Editor extends Component {
  constructor(props){
    super(props);

    this.state = {
      code: "// Code",
    };

    this.updateCode = (newCode) => {
      this.setState({
        code: newCode,
      });
    };
  };

  render() {
    const options = {
      lineNumbers: true,
    };
    return <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
  };
};

export default Editor;
