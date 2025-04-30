const { sumar, restar, multiplicar, dividir } = require('../src');

describe('Calculadora', () => {
  test('suma dos números', () => {
    expect(sumar(2, 3)).toBe(5);
  });
  test('resta dos números', () => {
    expect(restar(5, 3)).toBe(2);
  });
  test('multiplica dos números', () => {
    expect(multiplicar(4, 3)).toBe(12);
  });
  test('divide dos números', () => {
    expect(dividir(10, 2)).toBe(5);
    expect(dividir(5, 0)).toBe('💥');
  });
});