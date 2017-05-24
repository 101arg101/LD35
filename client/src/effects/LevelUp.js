import { send } from '../core/Network.js'

export default class LevelUp extends PIXI.Container {
  constructor ( side, isCurrentPlayer = false) {
    super()

    this.side = side
    this.isCurrentPlayer = isCurrentPlayer

    this.circle = new PIXI.Graphics()
    this.circle.beginFill( config.colors.lvlUp );
    this.circle.drawCircle( 0, 0, config.circleRadius );
    this.circle.alpha = 0.7
    this.addChild( this.circle )

    if ( this.isCurrentPlayer ) {
      let attributes = [
            {
              name: 'speed',    // reference to the model's attribute
              image: 'boot.png' // image that shows to the end user
            }, {
              name: 'defense',
              image: 'shield.png'
            }, {
              name: 'attack',
              image: 'sword.png'
            }
          ]
          // these 2 variables can be modified to customize how the buttons are distributed.
          arcStart = 0,
          arcEnd = attributes.length;
      
      for ( let i = arcStart, limit = arcEnd; i < limit; ++i ) {
        this.setupButton( attributes[i].name, attributes[i].image, i, limit )
      }
    }

    this.on('added', this.onAdded.bind( this ) )
  }

  createButton ( imageName ) {
    let button = new PIXI.Container()

    let bg = new PIXI.Graphics()
    bg.beginFill( 0xffffff );
    bg.drawCircle( 0, 0, config.circleRadius );
    bg.alpha = 0.7
    button.addChild( bg )

    let image = PIXI.Sprite.fromImage( imageName )
    image.tint = config.colors[ this.side ]
    image.anchor.set( 0.5 )
    button.addChild( image )
    button.interactive = true

    return button
  }
  
  setupButton ( attr, img, index, total ) {
    let theta = Math.PI*index/(total/2), // for determining button placement.
        distance = this.circle.width*1.25
    
    this[attr + 'Button'] = this.createButton(img)
    this[attr + 'Button'].on( 'click', this.upgradeAttribute.bind(this, attr) )
    this[attr + 'Button'].on( 'touchstart', this.upgradeAttribute.bind(this, attr) )
    this[attr + 'Button'].y += Math.cos(theta)*distance
    this[attr + 'Button'].x += Math.sin(theta)*distance
    this.addChild( this[attr + 'Button'] )
  }

  upgradeAttribute ( attribute, e ) {
    e.stopPropagation()

    send(['up', attribute])

    App.sound.play('attack')

    App.tweens.add( this.scale ).to({ x: 0.3, y: 0.3 }, 200, Tweener.ease.quadOut)
    App.tweens.add( this ).to({ alpha: 0 }, 250, Tweener.ease.quadOut).then( () => {
      this.parent.removeChild ( this )
    })
  }

  onAdded ( ) {
    this.circle.scale.set( 2, 2 )
    App.tweens.add( this.circle.scale ).from( {x: 3, y: 3 }, 1000, Tweener.ease.quadOut )
    let fadeOut = App.tweens.add( this.circle ).to(
      { alpha: 0 },
      1200,
      Tweener.ease.quintOut
    )

    if ( !this.isCurrentPlayer ) { this.parent.removeChild ( this ) }
  }
}