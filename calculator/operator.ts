import { Operator } from "./expression";

export class Plus implements Operator {
  precedence(): number { return 0 }
  op = "+"
}

export class Minus implements Operator {
  precedence(): number { return 0 }
  op = "-"
}

export class Multiply implements Operator {
  precedence(): number { return 1 }
  op = "*"
}

export class Divide implements Operator {
  precedence(): number { return 1 }
  op = "/"
}

export class Degree implements Operator {
  precedence(): number { return 2 }
  op = "^"
}

