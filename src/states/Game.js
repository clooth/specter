import Phaser from 'phaser'

export default class extends Phaser.State {
  create () {
    let banner = this.add.text(this.game.world.centerX, this.game.world.centerY, 'specter')
    banner.fontWeight = 200
    banner.font = 'Titillium Web'
    banner.fontSize = 32
    banner.fill = '#fff'
    banner.anchor.setTo(0.5)
  }

  render () {
    if (APP_ENV === 'development') {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
