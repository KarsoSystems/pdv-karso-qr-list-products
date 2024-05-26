const deps = require("../package.json").dependencies;
const Dotenv = require('dotenv-webpack');
const CommonConfig = require('./webpack.common'); 
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");

const devConfig = {
    output: {
        publicPath: "http://localhost:8080/",
      },
    
    devServer: {
        port: 8080,
        historyApiFallback: true,
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "admin_container",
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
        new Dotenv()
    ],
}


module.exports = (_, argv) => {
    console.log("----------- 💥  ADMIN-FRONT 💥 ------------");
    console.log("====== INICIANDO ADMIN CONTAINER PDV ======");
    console.log("==== 🔥 INICIANDO EN EL PUERTO 8080 🔥 ====");
    console.log("===========================================");
    console.log("===========================================");
    return merge(CommonConfig, devConfig);
};
