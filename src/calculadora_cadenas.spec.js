import calcular from "./calculadora.js";

describe("Sumar", () => {
  it("deberia sumar numeros en una cadena", () => {
    expect(calcular("3, 2")).toEqual(5);
  });
});
