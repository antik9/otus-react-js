export interface Expression {
  evaluate(): number
};

export interface Operator {
  precedence(): number
  op: string
}

export class BinaryExpression implements Expression {
  operator: Operator;
  left: Expression;
  right: Expression;

  constructor(op: Operator, left: Expression, right: Expression) {
    this.operator = op;
    this.left = left;
    this.right = right;
  }

  evaluate(): number {
    switch ( this.operator.op ) {
      case "+": return this.left.evaluate() + this.right.evaluate();
      case "-": return this.left.evaluate() - this.right.evaluate();
      case "*": return this.left.evaluate() * this.right.evaluate();
      case "/": return this.left.evaluate() / this.right.evaluate();
      case "^": return this.left.evaluate() ** this.right.evaluate();
      default: throw "unexpected operator";
    }
  };
}

export class FactorialExression implements Expression {
  value: number;
  constructor(value: number) {
    this.value = value;
  }

  evaluate(): number {
    let result = 1;
    let value = this.value;
    while (value > 1) result *= value--;
    return result;
  }
}

export interface FunctionImplementation {
  name: string
  call(expr: Expression): number
}

export class FunctionExpression implements Expression {
  fn: FunctionImplementation
  expr: Expression;
  constructor(fn: FunctionImplementation, expr: Expression) {
    this.fn = fn;
    this.expr = expr;
  }

  evaluate(): number { return this.fn.call(this.expr) }
}

export class NumberExpression implements Expression {
  value: number;

  constructor(v: number) {
    this.value = v;
  }

  evaluate(): number { return this.value };
};
