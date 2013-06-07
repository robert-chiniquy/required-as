var assert = require('assert');
var fs = require('fs');

var _ = require('underscore');
var esprima = require('esprima');


module.exports = function required_as(module_path) {
  var syntax = esprima.parse(fs.readFileSync(module_path));
  assert(syntax.type === 'Program');
  return _.flatten(syntax.body.filter(function(what) {
    return what.type === 'VariableDeclaration';
  }).map(function(decl) {
    return decl.declarations.filter(function(decl) {
      return decl.id &&
        decl.id.name &&
        decl.init &&
        decl.init.callee &&
        decl.init.callee.name === 'require';
    }).map(function(decl) {
      return { name: decl.id.name, source: decl.init.arguments[0].value };
    });
  }));
};

