'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('folders service', function() {
  it('registered the folders service', () => {
    assert.ok(app.service('folders'));
  });
});
