import { Expression } from "./expression";

export function Sin(expr: Expression): number {
  return Math.sin(expr.evaluate());
}

export function Cos(expr: Expression): number {
  return Math.cos(expr.evaluate());
}

export function Tan(expr: Expression): number {
  return Math.tan(expr.evaluate());
}

export function Fib(expr: Expression): number {
  let a = 0;
  let b = 1;
  let value = expr.evaluate();

  while (value > 0) {
    b += a;
    a = b - a;
    value -= 1;
  }
  return a;
}
