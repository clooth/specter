// Global dependencies
import 'pixi'
import 'p2'
import Phaser from 'phaser'

// Game states
import BootState from './states/Boot'
import LoadState from './states/Load'
import GameState from './states/Game'

class Game extends Phaser.Game {
  constructor () {
    let width = 400
    let height = 400

    super({
      width,
      height,
      renderer: Phaser.AUTO,
      parent: 'game',
      resolution: window.devicePixelRatio
    })

    this.state.add('Boot', BootState, false)
    this.state.add('Load', LoadState, false)
    this.state.add('Game', GameState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
