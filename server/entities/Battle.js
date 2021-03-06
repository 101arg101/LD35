const uniqid = require('uniqid')
const config = require('../config.js')
const Hero = require('./Hero.js')
const Tower = require('./Tower.js')

var _units = new WeakMap()
var interval = new WeakMap()
var _state = new WeakMap()

class Battle {
  constructor(state) {
    this.id = uniqid()
    this.type = "battle"
    this.position = { x: null, y: null }
    this.percentage = 0.5
    this.hp = {}
    this.units = {}

    _state.set(this, state)
    interval.set(this, state.clock.setInterval(this.attack.bind(this, state), config.attackInterval))
    _units.set(this, [])
  }

  join(unit) {
    unit.isBattling = true
    unit.battle = this

    if (unit instanceof Hero) {
      unit.destiny = null
    }

    this.units[unit.id] = true

    if (!this.hp[unit.side]) {

      // this.hp[unit.side] = unit.defense
      this.hp[unit.side] = unit.stat('hp')

    } else {
      // this.hp[unit.side] += unit.defense
      this.hp[unit.side] += unit.stat('hp')
    }

    _units.get(this).push(unit)
  }

  leave(unit, isAbandoning) {
    // TODO: check to see if the leave method is being called with something that evaluates to false
    // if not, then we can remove these lines of code
    if (typeof isAbandoning === "undefined") {
      isAbandoning = false
    }

    unit.isBattling = false

    let arr = _units.get(this)
    arr.splice(arr.indexOf(unit), 1)

    delete this.units[unit.id]

    if (isAbandoning) {
      this.hp[unit.side] -= unit.defense
    }

    // skip if there is no items left
    if (arr.length === 0) {
      return
    }

    let side1 = arr[0].side
    
    if (arr.filter(unit => unit.side !== side1).length == 0) {
      // other side left
      // leave remaining items and then destroy battle unit
      arr.map(unit => this.leave(unit, false ))
      this.destroy()
    }
  }

  attack(state) {
    let units = _units.get(this)

    if (units.length === 0) {
      console.log("Invalid battle instance, lets destroy it...")
      this.destroy()
      return
    }

    let side1 = units[ 0 ].side
    let unitsSide1 = units.filter(unit => unit.side === side1)
    let unitsSide2 = units.filter(unit => unit.side !== side1)
    let side2 = unitsSide2[ 0 ].side

    // TODO: process "first-strike"

    // this.hp[side1] -= this.getUnitsAttribute(unitsSide2, 'attack')
    // this.hp[side2] -= this.getUnitsAttribute(unitsSide1, 'attack')

    this.hp[side1] -= Math.max([this.getUnitsStat(unitsSide2, 'atk') - this.getUnitsStat(unitsSide1, 'def'),0])
    this.hp[side2] -= Math.max([this.getUnitsStat(unitsSide1, 'atk') - this.getUnitsStat(unitsSide2, 'def'),0])

    let side1Percent = this.hp[side1]/this.getUnitsStat(unitsSide1, 'hp')
    let side2Percent = this.hp[side2]/this.getUnitsStat(unitsSide2, 'hp')

    this.percentage = (side1Percent + side2Percent) / 2

    let winners = []
    let losers = []

    if (this.hp[side1] <= 0 && this.hp[side2] <= 0) {
      losers = [...unitsSide1, ...unitsSide2]
    } else if (this.hp[side1] <= 0 || this.hp[side2] <= 0) {
      winners = (this.hp[side1] <= 0) ? unitsSide2 : unitsSide1
      losers =  (this.hp[side1] <= 0) ? unitsSide1 : unitsSide2
    }

    if (winners.length > 0 || losers.length > 0) {
      let expToIncrement = this.getUnitsAttribute(losers, 'lvl')/winners.length

      losers.map(unit => {
        state.removeEntity(unit)

        if (unit instanceof Tower) {
          unit.alive = false

          if (unit.isMainTower) {
            let sideWinner = (unit.side === side1) ? side2 : side1
            state.gameOver(sideWinner)
          }
        }

        if (unit instanceof Hero) {
          state.respawn(unit)
        }
      })

      winners.map(unit => {
        this.leave(unit)
        unit.incrementExp(expToIncrement)
      })

      this.destroy()
    }
  }

  destroy() {
    _state.get(this).removeEntity(this)
    interval.get(this).clear()
  }

  getUnitsAttribute(units, attribute) {
    return units.reduce(
      (previousValue, currentUnit, currentIndex) => {
        return previousValue + currentUnit[attribute]
      },
      0
    )
  }

  getUnitsStat(units, stat) {
    return units.reduce(
      (previousValue, currentUnit, currentIndex) => {
        return previousValue + currentUnit.stat(stat)
      },
      0
    )
  }

  // toJSON () {
  // }

}

module.exports = Battle
