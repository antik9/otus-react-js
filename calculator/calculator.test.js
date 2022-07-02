import { evaluate } from "./calculator";

describe("Simple operations", () => {
  it("1 + 2", () =>  {
    expect(evaluate("1 + 2")).toEqual(3);
  })

  it("8 - 3", () =>  {
    expect(evaluate("8 - 3")).toEqual(5);
  })

  it("12 * 11", () =>  {
    expect(evaluate("12 * 11")).toEqual(132);
  })

  it("100 / 4", () =>  {
    expect(evaluate("100 / 4")).toEqual(25);
  })

  it("3 ^ 3", () =>  {
    expect(evaluate("3 ^ 3")).toEqual(27);
  })

  it("5!", () =>  {
    expect(evaluate("5!")).toEqual(120);
  })
})

describe("Functions", () => {
  it("fib(1)", () =>  {
    expect(evaluate("fib(1)")).toEqual(1);
  })

  it("fib(10)", () =>  {
    expect(evaluate("fib(10)")).toEqual(55);
  })

  it("sin(0)", () =>  {
    expect(evaluate("sin(0)")).toEqual(0);
  })

  it("sin(1)", () =>  {
    expect(evaluate("sin(1)")).toBeCloseTo(0.84, 2);
  })

  it("cos(0)", () =>  {
    expect(evaluate("cos(0)")).toEqual(1);
  })

  it("cos(1)", () =>  {
    expect(evaluate("cos(1)")).toBeCloseTo(0.54, 2);
  })

  it("tan(0)", () =>  {
    expect(evaluate("tan(0)")).toEqual(0);
  })
})

describe("Order of operations", () => {
  it("2 * 2 + 2", () =>  {
    expect(evaluate("2 * 2 + 2")).toEqual(6);
  })

  it("2 + 2 * 2", () =>  {
    expect(evaluate("2 + 2 * 2")).toEqual(6);
  })

  it("(2 + 2) * 2", () =>  {
    expect(evaluate("(2 + 2) * 2")).toEqual(8);
  })

  it("2 * 3 ^ 2", () =>  {
    expect(evaluate("2 * 3 ^ 2")).toEqual(18);
  })

  it("(2 * 3) ^ 2", () =>  {
    expect(evaluate("(2 * 3) ^ 2")).toEqual(36);
  })

  it("fib(8) + fib(9)", () =>  {
    expect(evaluate("fib(9) + fib(10)")).toEqual(89);
  })

  it("100 / fib(3) * 3", () =>  {
    expect(evaluate("100 / fib(3) * 3")).toEqual(150);
  })

  it("5! / 3!", () =>  {
    expect(evaluate("5! / 3!")).toEqual(20);
  })

})
