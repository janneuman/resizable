const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    test: "./example/index.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    sourceMapFilename: "[file].map",
    library: 'Resizable',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?cacheDirectory=true'},
    ]
  },
  resolve: {
    extensions: [".js"]
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 3000,
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ]
};
