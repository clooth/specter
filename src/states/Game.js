import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  create () {
    let banner = this.add.text(this.game.world.centerX, this.game.world.centerY, 'specter')
    banner.fontWeight = 200
    banner.font = 'Titillium Web'
    banner.fontSize = 32
    banner.fill = '#fff'
    banner.anchor.setTo(0.5)

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      asset: 'mushroom'
    })

    this.game.add.existing(this.mushroom)
  }

  render () {
    if (APP_ENV === 'development') {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
