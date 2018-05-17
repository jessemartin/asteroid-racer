const HtmlWebpackPlugin = require('html-webpack-plugin');
const html = new HtmlWebpackPlugin({
  title: 'App',
});

module.exports = {
  cache: true,
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        use: {
          loader: 'file-loader',
          options: {},
        },
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            configFile: 'tsconfig.json',
          },
        },
      },
    ],
  },
  plugins: [html],
};
