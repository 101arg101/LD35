// import Resources from './core/Resources.js'
// import TitleScene from './scenes/TitleScene.js'
// import { Howl } from 'howler'

// App.sound = new Howl(require('./data/audio.json'))
// Resources.load(function () {
  // App.sceneManager.goTo(TitleScene)
  // App.update()
// })

function d(sides, number) {
  let ary = [],
      i = 0;
  number = number ? number : 1;
  
  while (ary.length < number) {
    ary.push(Math.ceil(Math.random()*sides))
  }
  console.log(ary.join(', '))
}
