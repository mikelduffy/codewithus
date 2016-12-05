'use strict';

const service = require('feathers-mongoose');
const folders = require('./folders-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: folders,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/folders', service(options));

  // Get our initialize service to that we can bind hooks
  const foldersService = app.service('/folders');

  // Set up our before hooks
  foldersService.before(hooks.before);

  // Set up our after hooks
  foldersService.after(hooks.after);
};
