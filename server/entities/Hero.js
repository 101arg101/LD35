const Unit = require('./Unit.js')

class Hero extends Unit {
  constructor ( options ) {
    super ( options )
    this.type = 'hero'
    this.name = options.name
    this.lvl = 1
    this.speed = 0.1
    this.pointsToDistribute = 1
    this.attributeMultipliers = {
      'attack': 1,
      'defense': 1,
      'speed': .05
    }
    this.skillmap = {}
  }
  
  incrementAmount ( attribute ) {
    if ( this.attributeMultipliers.hasOwnProperty(attribute) ) {
      return this.attributeMultipliers[attribute]
    }
    return 0
  }

  levelUp ( attribute ) {
    // TODO: add john cena airhorn upon level up
    // TODO: lower all audio files' volume by 90% except for airhorn
    if ( this.pointsToDistribute > 0 && this.incrementAmount(attribute) ) {
      this[ attribute ] += this.incrementAmount(attribute)
      this.pointsToDistribute--
    }
    console.log('Attributes up for ' + this)
  }
  
  toString () {
    return `${this.name}: { speed: ${this.speed}, attack: ${this.attack}, defense: ${this.defense} }`
  }
}

module.exports = Hero
