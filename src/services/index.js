'use strict';
const folders = require('./folders');
const files = require('./files');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');

module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(files);
  app.configure(folders);
};
