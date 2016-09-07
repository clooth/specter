// dependencies
const path = require('path')
const webpack = require('webpack')

// phaser components
const phaserModule = path.join(__dirname, '/node_modules/phaser')
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
const pixi = path.join(phaserModule, 'build/custom/pixi.js')
const p2 = path.join(phaserModule, 'build/custom/p2.js')

// environment injection
const environmentPlugin = new webpack.DefinePlugin({
  APP_ENV: JSON.stringify('production')
})

// webpack config
module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, '../src/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './dist/',
    filename: 'bundle.js'
  },
  plugins: [
    environmentPlugin,
    new webpack.IgnorePlugin(/\.\/locale$/, /moment$/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      drop_console: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'src') },
      { test: /pixi\.js/, loader: 'expose?PIXI' },
      { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
      { test: /p2\.js/, loader: 'expose?p2' }
    ]
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    alias: {
      phaser,
      pixi,
      p2
    }
  }
}
