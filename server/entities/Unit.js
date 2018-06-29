const uniqid = require('uniqid')
const config = require('../config.js')

var battleInstances = new WeakMap()
var lastBattleAbandon = new WeakMap()

class Unit {
  constructor(data) {
    this.type = 'unit'
    if (typeof(data.properties.side) === "undefined") {
      this.side = 2
    } else {
      // TODO: this code is not DRY
      this.side = parseInt(data.properties.side)
    }

    this.position = { x: data.x, y: data.y }
    this.destiny = null
    this.isBattling = false
    this.isCreep = data.properties.isCreep || false
    this.lvl = data.lvl || 1
    this.pointsToDistribute = 0
    this.exp = 0
    this.expMax = 1
    this.id = data.id || uniqid()
    this.data = data
    this.attack = data.properties.attack || 0
    this.defense = data.properties.defense || 1
    this.speed = data.properties.speed || 0.05
    
    this.busy = false
    // TODO: modularize
    // stat  = [calc, base, nat-coe, tmp-coe, nat-add, tmp-add]
    this.stats = {
      hp:  [3,3, 1,1, 0,0],
      atk: [2,2, 1,1, 0,0],
      def: [1,1, 1,1, 0,0],
      spe: [1,1, 1,1, 0,0]
    }
    this.damage = 0
    
    // TODO: modularize
    this.skills = [
      'buff',
      'heal',
      'curse'
    ]
  }
  
  toString() {
    // return `${ this.name }: { speed: ${ this.speed }, attack: ${ this.attack }, defense: ${ this.defense } }`
    return `{ <${ this.name }> hp: ${this.stats.hp[0]}, atk: ${this.stats.atk[0]}, def: ${this.stats.def[0]}, spe: ${this.stats.spe[0]} }`
  }

  update(state) {
    // TODO: improve me
    //
    // the tower on current unit's lane was destroyed,
    // find another destiny to follow, which is main opponent's tower

    if (this.isCreep && !this.destiny) {
      let mainEnemyTower = state.towers.filter( tower => tower.side !== this.side && !tower.isSpawnAllowed )[ 0 ]

      this.destiny = {
        x: mainEnemyTower.position.x,
        y: mainEnemyTower.position.y
      }
    }
  }

  incrementExp(exp) {
    this.exp += exp

    if (this.exp >= this.expMax) {
      this.lvl++
      this.pointsToDistribute++
      this.exp = this.exp - this.expMax
      this.expMax += (this.lvl/2)
    }
  }

  get isAvailableForBattle() {
    // units can join in battle again only after 1 sec abandoning
    return this.lastBattleAbandon + config.abandonImmunityTime < Date.now()
  }

  get lastBattleAbandon() {
    return lastBattleAbandon.get(this) || 0
  }

  moveTo(point) {
    this.destiny = point

    if (this.isBattling && this.lastBattleAbandon + config.abandonCooldown < Date.now()) {
      battleInstances.get(this).leave(this, true)
      lastBattleAbandon.set(this, Date.now())
    }
  }
  
  useSkill(skill) {
    this.busy = true
    if (this.skills[skill] === 'buff') {
      this.stat('atk','add',1)
      this.stat('def','mult',.5)
    } else if (this.skills[skill] === 'heal') {
      this.damage = 0
    } else if (this.skills[skill] === 'curse') {
      this.stat('atk','div',.5)
      this.stat('def','div',.5)
    }
    return this.stats
  }
  
  stat(stat, action, amount) {
    // hero.stat('hp', sub, .1)
    // this.stats = {
      //    calc, base, coe, coetmp, mod, modtmp
      // hp:  [3,3, 1,1, 0,0],
      // atk: [2,2, 1,1, 0,0],
      // def: [1,1, 1,1, 0,0],
      // spe: [1,1, 1,1, 0,0]
    // }
    
    if (action === 'reset') {
      this.stats[stat][3] = this.stats[stat][2]
      this.stats[stat][5] = this.stats[stat][4]
    } else if (action === 'set') {
    } else if (action === 'add') {
      this.stats[stat][5] += amount
    } else if (action === 'sub') {
      this.stats[stat][5] -= amount
    } else if (action === 'mul') {
      this.stats[stat][3] += amount
    } else if (action === 'div') {
      this.stats[stat][3] -= amount
    }
    this.stats[stat][0] = this.stats[stat][3] * (this.stats[stat][1] + this.stats[stat][5])
    return this.stats[stat][0]
  }

  set battle(battle) {
    battleInstances.set(this, battle)
  }
}

module.exports = Unit
