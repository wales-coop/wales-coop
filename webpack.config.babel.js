import path from 'path';
import webpack from 'webpack';

const config = {
  devtool: 'source-map',
  entry: [
    'materialize-loader!./materialize.config.js',
    'babel-polyfill',
    './src/client/index.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      jquery: path.join(__dirname, 'node_modules/materialize-css/node_modules/jquery/dist/jquery'),
    },
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
      test: /\.hbs$/,
      loader: 'handlebars-loader',
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
    }, {
      test: require.resolve('jquery-validation'),
      loader: 'imports-loader',
      query: 'define=>false,$=jquery',
    }, {
      test: require.resolve('materialize-css'),
      loader: 'imports-loader',
      query: 'jQuery=jquery,$=jquery,hammerjs',
    }],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  devServer: {
    proxy: {
      '*': {
        target: 'http://localhost:4000',
        secure: false,
      },
    },
    stats: {
      colors: true,
      hash: false,
      version: false,
      assets: false,
      chunks: false,
    },
  },
};

export default config;
