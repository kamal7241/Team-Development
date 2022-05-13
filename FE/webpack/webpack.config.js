const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const instance = new MiniCssExtractPlugin()
module.exports = {
  // mode: 'development', 
  mode: 'production', 
  devtool: 'inline-source-map',
  entry: {
    index: './src/main.js',
    print: './src/print.js',
  },
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename : 'assets/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: [ 'style-loader'  , 'css-loader' ],
        use: [ MiniCssExtractPlugin.loader , 'css-loader' ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|wepb)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]'
        }
        // use:['file-loader'],
        // generator: {
				// 	filename: 'assets/img/[hash][ext][query]'
				// }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'our demo',
      template:"./index.html"
    }),
    new MiniCssExtractPlugin(
      {
        filename: "[name].css",
        linkType:"text/css"
      }
    )
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};