'use strict';

const foldersModel = require('../folders/folders-model');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filesSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: false },
  folder: { type: Schema.Types.ObjectId, ref: 'foldersModel' },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const filesModel = mongoose.model('files', filesSchema);

module.exports = filesModel;
