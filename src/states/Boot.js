import Phaser from 'phaser'
import WebFontLoader from 'webfontloader'

export default class extends Phaser.State {
  init () {
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  preload () {
    WebFontLoader.load({
      google: {
        families: ['Titillium Web']
      },
      active: this.fontsLoaded
    })

    this.load.image('loaderBg', 'assets/images/loader-bg.png')
    this.load.image('loaderBar', 'assets/images/loader-bar.png')
  }

  render () {
    if (this.fontsReady) {
      this.state.start('Load')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
