export default class Stats {
  str: number
  strMod: number
  dex: number
  dexMod: number
  con: number
  conMod: number
  int: number
  intMod: number
  wis: number
  wisMod: number
  cha: number
  chaMod: number
  strLimit: number = 20
  dexLimit: number = 20
  conLimit: number = 20
  intLimit: number = 20
  wisLimit: number = 20
  chaLimit: number = 20
  // setStats takes a statObject stuctured like the stats object itself sans the modifiers.
  // This saves you time by letting you only assign the stats and the constructor does the rest
  // for you.
  constructor(statObject: any) {
    this.str = statObject.str
    this.dex = statObject.dex
    this.con = statObject.con
    this.int = statObject.int
    this.wis = statObject.wis
    this.cha = statObject.cha
    this.strMod = this.determineModifiers(this.str)
    this.dexMod = this.determineModifiers(this.dex)
    this.conMod = this.determineModifiers(this.con)
    this.intMod = this.determineModifiers(this.int)
    this.wisMod = this.determineModifiers(this.wis)
    this.chaMod = this.determineModifiers(this.cha)
  }
  // Runs the logic to determine which modifier is right for the stat value.
  determineModifiers(value) {
    if (0 <= value && value < 2) {
      return -5
    } else if (2 <= value && value < 4) {
      return -4
    } else if (4 <= value && value < 6) {
      return -3
    } else if (6 <= value && value < 8) {
      return -2
    } else if (8 <= value && value < 10) {
      return -1
    } else if (10 <= value && value < 12) {
      return 0
    } else if (12 <= value && value < 14) {
      return 1
    } else if (14 <= value && value < 16) {
      return 2
    } else if (16 <= value && value < 18) {
      return 3
    } else if (18 <= value && value < 20) {
      return 4
    } else if (20 <= value && value < 22) {
      return 5
    } else if (22 <= value && value < 24) {
      return 6
    } else if (24 <= value && value < 26) {
      return 7
    } else if (26 <= value && value < 28) {
      return 8
    } else if (28 <= value && value < 30) {
      return 9
    }
  }
  updateStat(statToUpdate: string, updateValue: number, is_magic_enhanced: boolean) {
    let statCheck: number
    switch (statToUpdate) {
      case 'str':
        statCheck = this.str + updateValue
        if (statCheck > this.strLimit && is_magic_enhanced) {
          if (statCheck > 30) {
            console.error("Tried to make a stat bigger than 30")
          } else {
            this.str = statCheck
            this.strLimit += 2
            this.strMod = this.determineModifiers(statCheck)
          }
        } else if (statCheck < 20 && is_magic_enhanced) {
          this.str = statCheck
          this.strMod = this.determineModifiers(statCheck)
          this.strLimit += 2
        } else if (statCheck < 20) {
          this.str = statCheck
          this.strMod = this.determineModifiers(statCheck)
        } else {
          console.error("Invalid values")
        }
        break
      case 'dex':
        statCheck = this.dex + updateValue
        if (statCheck > this.dexLimit && is_magic_enhanced) {
          if (statCheck > 30) {
            console.error("Tried to make a stat bigger than 30")
          } else {
            this.dex = statCheck
            this.dexLimit += 2
            this.dexMod = this.determineModifiers(statCheck)
          }
        } else if (statCheck < 20 && is_magic_enhanced) {
          this.dex = statCheck
          this.dexMod = this.determineModifiers(statCheck)
          this.dexLimit += 2
        } else if (statCheck < 20) {
          this.dex = statCheck
          this.dexMod = this.determineModifiers(statCheck)
        } else {
          console.error("Invalid values")
        }
        break
      case 'con':
        statCheck = this.con + updateValue
        if (statCheck > this.conLimit && is_magic_enhanced) {
          if (statCheck > 30) {
            console.error("Tried to make a stat bigger than 30")
          } else {
            this.con = statCheck
            this.conLimit += 2
            this.conMod = this.determineModifiers(statCheck)
          }
        } else if (statCheck < 20 && is_magic_enhanced) {
          this.con = statCheck
          this.conMod = this.determineModifiers(statCheck)
          this.conLimit += 2
        } else if (statCheck < 20) {
          this.con = statCheck
          this.conMod = this.determineModifiers(statCheck)
        } else {
          console.error("Invalid values")
        }
        break
      case 'int':
        statCheck = this.int + updateValue
        if (statCheck > this.intLimit && is_magic_enhanced) {
          if (statCheck > 30) {
            console.error("Tried to make a stat bigger than 30")
          } else {
            this.int = statCheck
            this.intLimit += 2
            this.intMod = this.determineModifiers(statCheck)
          }
        } else if (statCheck < 20 && is_magic_enhanced) {
          this.int = statCheck
          this.intMod = this.determineModifiers(statCheck)
          this.intLimit += 2
        } else if (statCheck < 20) {
          this.int = statCheck
          this.intMod = this.determineModifiers(statCheck)
        } else {
          console.error("Invalid values")
        }
        break
      case 'wis':
        statCheck = this.wis + updateValue
        if (statCheck > this.wisLimit && is_magic_enhanced) {
          if (statCheck > 30) {
            console.error("Tried to make a stat bigger than 30")
          } else {
            this.wis = statCheck
            this.wisLimit += 2
            this.wisMod = this.determineModifiers(statCheck)
          }
        } else if (statCheck < 20 && is_magic_enhanced) {
          this.wis = statCheck
          this.wisMod = this.determineModifiers(statCheck)
          this.wisLimit += 2
        } else if (statCheck < 20) {
          this.wis = statCheck
          this.wisMod = this.determineModifiers(statCheck)
        } else {
          console.error("Invalid values")
        }
        break
      case 'cha':
        statCheck = this.cha + updateValue
        if (statCheck > this.chaLimit && is_magic_enhanced) {
          if (statCheck > 30) {
            console.error("Tried to make a stat bigger than 30")
          } else {
            this.cha = statCheck
            this.chaLimit += 2
            this.chaMod = this.determineModifiers(statCheck)
          }
        } else if (statCheck < 20 && is_magic_enhanced) {
          this.cha = statCheck
          this.chaMod = this.determineModifiers(statCheck)
          this.chaLimit += 2
        } else if (statCheck < 20) {
          this.cha = statCheck
          this.chaMod = this.determineModifiers(statCheck)
        } else {
          console.error("Invalid values")
        }
        break
      default:
        console.error("invalid stat option")
        break
    }
  }
}