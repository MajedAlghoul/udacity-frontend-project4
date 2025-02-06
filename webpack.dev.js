const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/client/index.js",
  mode: "development",
  devtool: "source-map",
  stats: "verbose",
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    port: 3000,
    allowedHosts: "all",
  },
};
