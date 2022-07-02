import { Expression, FunctionImplementation } from "./expression";

export class Sin implements FunctionImplementation {
  name = "sin"
  call(expr: Expression): number { return Math.sin(expr.evaluate()) }
}

export class Cos implements FunctionImplementation {
  name = "cos"
  call(expr: Expression): number { return Math.cos(expr.evaluate()) }
}

export class Tan implements FunctionImplementation {
  name = "tan"
  call(expr: Expression): number { return Math.tan(expr.evaluate()) }
}

export class Fib implements FunctionImplementation {
  name = "fib"
  call(expr: Expression): number {
    let a = 0, b = 1;
    let value = expr.evaluate();

    while (value > 0) {
      b += a;
      a = b - a;
      value--;
    }
    return a;
  }
}
