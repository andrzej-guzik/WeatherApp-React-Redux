const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = [ "react", "react-dom", "react-redux", "redux", "axios" ];

const isDebug = process.env.NODE_ENV == "production";


plugins = [
    new ExtractTextPlugin("css/styles.css"),
    new HtmlWebpackPlugin({
        template: "index.html"
    }),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: `"${process.env.NODE_ENV || "development"}"`
        }
    })
]

if (isDebug) {
    plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor", "manifest"]
        })
    );
}

const config = {
	entry: {
		scripts: "./src/index.js",
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.resolve(__dirname, "docs"),
        publicPath: "/",
        filename: "[name].[hash].js"
	},
	 module: {
        rules: [
            {
				test: /\.jsx?$/,
                use: ["react-hot-loader", "babel-loader", "eslint-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader?importLoaders=1!postcss-loader"
                })
            },
			{
                test: /\.(jpe?g|png|svg)$/,
                use: [
                    "url-loader?limit=40000&name=images/[name].[ext]",
                    "image-webpack-loader"
                ]
            }
        ]
    },
    plugins
};

module.exports = config;
