var required_as = require('../lib/required-as');


exports.test_required_as = function(test, assert) {
  var modules = required_as(__dirname + '/fixtures/module.js');
  assert.ok(modules[0].name === 'net');
  assert.ok(modules[0].source === 'net');
  assert.ok(modules[1].name === 'self');
  assert.ok(modules[1].source === './module.js');
  assert.ok(modules[2].name === 'required_as');
  assert.ok(modules[2].source === '../../lib/required-as.js');
  test.finish();
};

exports.test_required_as({finish: function() {}}, require('assert'));

