'use strict';

const service = require('feathers-mongoose');
const files = require('./files-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: files,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/files', service(options));

  // Get our initialize service to that we can bind hooks
  const filesService = app.service('/files');

  // Set up our before hooks
  filesService.before(hooks.before);

  // Set up our after hooks
  filesService.after(hooks.after);
};
