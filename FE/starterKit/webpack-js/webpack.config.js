const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
module.exports = {
    entry: {
      home: { import: './src/main.js', filename: 'pages/[name].js' },
      about: { import: './src/about.js', filename: 'pages/[name].js' },
    },
    optimization: {
        usedExports: true,
        sideEffects: true,
        providedExports: true,
        runtimeChunk: 'single',
    },
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename : 'assets/[hash][ext][query]',
      clean: true,
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
            //  "style-loader", // to inject style to dom
              MiniCssExtractPlugin.loader, // generate css file and add link to it
              "css-loader", // Translates CSS into CommonJS
              "sass-loader",// Compiles Sass to CSS
            ],
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          // images
          {
            test: /\.(png|svg|jpg|jpeg|gif|wepb)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'images/[name][ext][query]'
            }
          },
          // fonts
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
      },
    plugins: [
      // new HtmlWebpackPlugin({ template:"public/indekkx.html" }) ,
        new HtmlWebpackPlugin({ filename:"index.html" ,chunks:['home' , 'about'] ,title:"starterKit" ,template:"public/index.html" }) ,
        new HtmlWebpackPlugin({ filename:"home.html" ,chunks:['home'] ,title:"starterKit" ,template:"public/index.html" }) ,
        new HtmlWebpackPlugin({ filename:"about.html", chunks:['about'] ,title:"starterKit" ,template:"public/index.html" }) 
        , new MiniCssExtractPlugin(
          {
            filename: "[name].css",
            linkType:"text/css"
          }
        )
    ],
    devServer: {
        static: './dist',
      },
    devtool: 'inline-source-map',
  };