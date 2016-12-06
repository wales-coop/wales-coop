import path from 'path';

const config = {
  devtool: 'source-map',
  entry: [
    'materialize-loader!./materialize.config.js',
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: ['latest', 'stage-2'],
      },
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url',
      query: {
        limit: 1000,
        mimetype: 'application/font-woff',
      },
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file',
    }],
  },
};

export default config;
