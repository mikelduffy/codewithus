import React, {Component} from 'react';
import { render } from 'react-dom';
import CodeWithUs from './containers/codewithus.js';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');
require('./styles.scss');

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
