import { Provider } from "react-redux";
const React = require("react");

function wrapComponentInProvider(Component, { store }) {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
}

module.exports = {
  plugin: wrapComponentInProvider,
  phase: "execution",
  module: "jsxCompose"
};
