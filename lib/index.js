"use strict";

var _reactRedux = require("react-redux");

var React = require("react");

var wrapComponentInProvider = function wrapComponentInProvider(_ref) {
  var App = _ref.App,
      config = _ref.config;
  var store = config.store;
  return React.createElement(_reactRedux.Provider, {
    store: store
  }, React.createElement(App, null));
};

module.exports = {
  plugin: wrapComponentInProvider,
  phase: "execution",
  module: "jsxCompose"
};