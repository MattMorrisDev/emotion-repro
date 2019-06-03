const addBabelPreset = require('customize-cra').addBabelPreset;

module.exports = {
  webpack: webpackConfig => {
    addBabelPreset('@emotion/babel-preset-css-prop')(webpackConfig);
    return webpackConfig;
  }
};
