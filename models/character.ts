import Stats from "./stats"
import {die} from "./dice"

export default class Character {
  name: string
  level: number
  curHP: number
  maxHP: number
  hitDie: die
  class
  stats: Stats
  constructor(_name: string, _level: number, _hitDie: die, _class, _stats: Stats) {
    this.name = _name
    this.level = _level
    this.hitDie = _hitDie
    this.class = _class
    this.stats = _stats
  }
}