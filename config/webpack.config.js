const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const deps = require("../package.json").dependencies;
var path = require("path");
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = (_, argv) => ({
  output: {
    publicPath: "https://karsosystems.github.io/pdv-karso-qr-list-products/",
    // publicPath: "http://localhost:8081/",
    // publicPath: "http://localhost:8080/",
    path:path.resolve("docs/")
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "karso_qr",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    // new CopyPlugin({
    //     patterns:[
    //       {
    //         from:path.resolve(__dirname, "../src/assets/*"),
    //         to:path.resolve(__dirname, "../docs"),
    //         context:"src"
    //       }
    //     ]
    // }),
    new Dotenv()
  ],
});
