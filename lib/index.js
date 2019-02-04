"use strict";

var _reactRedux = require("react-redux");

var React = require("react");

function wrapComponentInProvider(Component, _ref) {
  var store = _ref.store;
  return React.createElement(_reactRedux.Provider, {
    store: store
  }, React.createElement(Component, null));
}

module.exports = {
  plugin: wrapComponentInProvider,
  phase: "execution",
  module: "jsxCompose"
};