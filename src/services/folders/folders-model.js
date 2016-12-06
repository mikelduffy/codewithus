'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foldersSchema = new Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const foldersModel = mongoose.model('folders', foldersSchema);

module.exports = foldersModel;
