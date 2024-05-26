const deps = require("../package.json").dependencies;
const Dotenv = require('dotenv-webpack');
const CommonConfig = require('./webpack.common'); 
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");

const prodConfig = {
    output: {
        publicPath: "https://karso-dev.netlify.app/",
      },
    
    devServer: {
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
    console.log(_);
    console.log(argv)
    console.log("----------- 💥  ADMIN-FRONT 💥 ------------");
    console.log("====== INICIANDO ADMIN CONTAINER PDV ======");
    console.log("====== 🔥 CREANDO BUILD PRODUCTIVO 🔥 =====");
    console.log("===========================================");
    console.log("===========================================");
    return merge(CommonConfig, prodConfig);
};
