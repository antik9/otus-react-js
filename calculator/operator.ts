import { Operator } from "./expression";

export class Plus implements Operator {
  precedence = 0;

  op = "+";
}

export class Minus implements Operator {
  precedence = 0;

  op = "-";
}

export class Multiply implements Operator {
  precedence = 1;

  op = "*";
}

export class Divide implements Operator {
  precedence = 1;

  op = "/";
}

export class Degree implements Operator {
  precedence = 2;

  op = "^";
}
