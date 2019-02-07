import { Provider } from "react-redux";
const React = require("react");

const wrapComponentInProvider = ({ App, config }) => {
  const { store } = config;
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

module.exports = {
  plugin: wrapComponentInProvider,
  phase: "execution",
  module: "jsxCompose"
};
