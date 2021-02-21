import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path";
const __dirname = path.resolve();

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.png$/, 
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/favicon.ico",
    })
  ]
}