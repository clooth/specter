// dependencies
const path = require('path')
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// phaser components
const phaserModule = path.join(__dirname, '../node_modules/phaser')
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
const pixi = path.join(phaserModule, 'build/custom/pixi.js')
const p2 = path.join(phaserModule, 'build/custom/p2.js')

// environment injection
const environmentPlugin = new webpack.DefinePlugin({
  APP_ENV: JSON.stringify('development')
})

// webpack config
module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, '../src/index.js')
    ]
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    pathinfo: true,
    publicPath: './dist/',
    filename: 'bundle.js'
  },
  watch: true,
  plugins: [
    environmentPlugin,
    new BrowserSyncPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 3000,
      open: false,
      server: {
        baseDir: ['./', './build']
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
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2
    }
  }
}
