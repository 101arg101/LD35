const Unit = require('./Unit.js')

class Hero extends Unit {
  constructor(options) {
    super(options)
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
  
  incrementAmount(attribute) {
    if (this.attributeMultipliers.hasOwnProperty(attribute)) {
      return this.attributeMultipliers[attribute]
    }
    return 0
  }

  oldLevelUp(attribute) {
    if (this.pointsToDistribute > 0 && this.incrementAmount(attribute)) {
      this[attribute] += this.incrementAmount(attribute)
      this.pointsToDistribute--
    }
    console.log('Attributes up for ' + this)
  }
  
  levelUp(attribute) {
    if (this.pointsToDistribute > 0 && typeof this.stat(attribute) === 'number') {
      this.stats[attribute][1]++
      this.pointsToDistribute--
      this.stat()
    }
    console.log('Attributes up for ' + this)
  }
}

module.exports = Hero
