import {
  BinaryExpression,
  Expression,
  FactorialExression,
  FunctionExpression,
  FunctionImplementation,
  NumberExpression,
  Operator,
} from "./expression";

import { Fib, Sin, Cos, Tan } from "./function";

import { Plus, Minus, Multiply, Divide, Degree } from "./operator";

function closingBraceIndex(line: string, index: number): number {
  let openedBraces = 1;
  let iter = index;
  while (openedBraces > 0 && iter + 1 < line.length) {
    iter += 1;
    if (line[iter] === ")") openedBraces -= 1;
    else if (line[iter] === "(") openedBraces += 1;
  }
  return iter;
}

function reduce(
  operatorStack: Array<Operator>,
  expressionStack: Array<Expression>
): Expression {
  while (operatorStack.length > 0) {
    let index = 0;
    let { precedence } = operatorStack[index];
    while (index < operatorStack.length - 1) {
      if (operatorStack[index + 1].precedence <= precedence) break;
      index += 1;
      precedence = operatorStack[index].precedence;
    }

    const left = expressionStack[index];
    const right = expressionStack[index + 1];
    expressionStack = expressionStack
      .slice(0, index)
      .concat([new BinaryExpression(operatorStack[index], left, right)])
      .concat(expressionStack.slice(index + 2));
    operatorStack = operatorStack
      .slice(0, index)
      .concat(operatorStack.slice(index + 1));
  }

  return expressionStack[0];
}

function parse(line: string): Expression {
  let currentNumber = "";
  const expressionStack: Array<Expression> = [];
  const operatorStack: Array<Operator> = [];

  for (let index = 0; index < line.length; index += 1) {
    switch (line[index]) {
      case "+":
        operatorStack.push(new Plus());
        break;
      case "-":
        operatorStack.push(new Minus());
        break;
      case "*":
        operatorStack.push(new Multiply());
        break;
      case "/":
        operatorStack.push(new Divide());
        break;
      case "^":
        operatorStack.push(new Degree());
        break;
      case "!":
        expressionStack.push(new FactorialExression(+currentNumber));
        currentNumber = "";
        break;
      case "(":
        const endOfExpression = closingBraceIndex(line, index);
        expressionStack.push(parse(line.slice(index + 1, endOfExpression)));
        index += endOfExpression - index;
        break;
      case " ":
        if (currentNumber !== "") {
          expressionStack.push(new NumberExpression(+currentNumber));
          currentNumber = "";
        }
        break;
      default:
        if (line[index] >= "0" && line[index] <= "9") {
          currentNumber += line[index];
          continue;
        }

        let fnName = "";
        while (line[index] !== "(") {
          fnName += line[index];
          index += 1;
        }
        const endOfFunc = closingBraceIndex(line, index);

        let fnImpl: FunctionImplementation;
        switch (fnName) {
          case "sin":
            fnImpl = Sin;
            break;
          case "cos":
            fnImpl = Cos;
            break;
          case "tan":
            fnImpl = Tan;
            break;
          case "fib":
            fnImpl = Fib;
            break;
          default:
            throw "unexpected function expression";
        }

        expressionStack.push(
          new FunctionExpression(
            fnImpl,
            parse(line.slice(index + 1, endOfFunc))
          )
        );
        index += endOfFunc - index;
    }
  }

  if (currentNumber !== "") {
    expressionStack.push(new NumberExpression(+currentNumber));
  }

  return reduce(operatorStack, expressionStack);
}

export default function evaluate(line: string) {
  return parse(line).evaluate();
}
