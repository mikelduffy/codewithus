import React from 'react';
import { render } from 'react-dom';
import Editor from './containers/editor'

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
  render(<Editor />, document.getElementById('app'));
}).catch(error => {
  if(error.code === 401) {
    window.location.href = '/login.html'
  }
  console.error(error);
});
