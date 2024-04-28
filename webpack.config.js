const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv = {}) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "spacecraft",
    webpackConfigEnv,
  });

  const config = merge(defaultConfig, {
    // customizations go here
  });

  return config;
};