import React, {Component} from 'react';
import { render } from 'react-dom';
import CodeWithUs from './containers/codewithus.js';
require('./styles.scss');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/css/css');

if (module.hot) {
  module.hot.accept();
}

const socket = io();
const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    storage: window.localStorage
  }));

app.authenticate().then(() => {
  render(<CodeWithUs />, document.getElementById('app'));
}).catch(error => {
  if(error.code === 401) {
    window.location.href = '/login.html'
  }
  console.error(error);
});

export default app;
