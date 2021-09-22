class die {
  min: number
  max: number
  RollDie() {
    return Math.random() * (this.max - this.min) + this.min;
  }
}

export class d4 extends die {
  min: number = 1
  max: number = 4
}

export class d6 extends die {
  min: number = 1
  max: number = 6
}

export class d8 extends die {
  min: number = 1
  max: number = 8
}

export class d10 extends die {
  min: number = 1
  max: number = 10
}

export class d12 extends die {
  min: number = 1
  max: number = 12
}

export class d20 extends die {
  min: number = 1
  max: number = 20
}

export class d100 extends die {
  min: number = 1
  max: number = 100
}