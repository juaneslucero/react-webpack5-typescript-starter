const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const dependencies = require("./package.json").dependencies;

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    devServer: {
        port: 5000,
        contentBase: path.join(__dirname, "public"),
        host: '0.0.0.0',
        historyApiFallback: true
    },
    output: {
        publicPath: "http://localhost:5000/",
        chunkFilename: "[id].[contenthash].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        // new ModuleFederationPlugin({
        //     name: "react-webpack5-typescript-starter", // TODO: Replace with applicable name
        //     library: {
        //         type: "var",
        //         name: "react-webpack5-typescript-starter" // TODO: Replace with applicable name
        //     },
        //     filename: "remoteEntry.js",
        //     remotes: {},
        //     exposes: {},
        //     shared: {
        //         ...dependencies,
        //         "react": {
        //             singleton: true,
        //             requiredVersion: dependencies["react"]
        //         },
        //         "react-dom": {
        //             singleton: true,
        //             requiredVersion: dependencies["react-dom"]
        //         }
        //     }
        // }),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
        })
    ]
};
