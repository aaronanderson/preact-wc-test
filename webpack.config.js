const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',

  devtool: "source-map",
  devServer: {
    open: true,
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:5000/api'
    }
  },

  resolve: {
    modules: ['node_modules', './src'],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },


  output: {
    //filename: '[name].[chunkhash].js',
    filename: 'preact-test.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [new HtmlWebpackPlugin({
    //inject: false,
    template: "./src/index.html",
    //hash: true,
    //publicPath: "/",
    title: "Preact Web Component Test Application",
    filename: "index.html",
    appMountId: "preact-wc-test-container",
    //favicon: "./src/fav.png"
  })],

  module: {
    rules: [

      {
        test: /\.ts(x?)$/,
        include: [path.resolve(__dirname, 'src')],
        loaders: ['ts-loader']
      },

      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },


      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",

          options: {
            //name: "[path][name].[hash].[ext]",
            name: "assets/[name].[ext]",
          },
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },

  //package.json -> "sideEffects": false,
  optimization: {
    //usedExports: true
  },


};
