class die {
  min
  max
  RollDie() {
    return Math.random() * (this.max - this.min) + this.min;
  }
}

export class d4 extends die {
  min = 1
  max = 4
}

export class d6 extends die {
  min = 1
  max = 6
}

export class d8 extends die {
  min = 1
  max = 8
}

export class d10 extends die {
  min = 1
  max = 10
}

export class d12 extends die {
  min = 1
  max = 12
}

export class d20 extends die {
  min = 1
  max = 20
}