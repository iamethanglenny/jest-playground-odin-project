const calculator = require('./calculator');

describe('calculator', () => {
    test('adds two numbers', () => {
        expect(calculator.add(4, 7)).toBe(11);
    });

    test('subtracts two numbers', () => {
        expect(calculator.subtract(4, 7)).toBe(-3);
    });

    test('multiplies two numbers', () => {
        expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('divides two numbers', () => {
        expect(calculator.divide(20, 5)).toBe(4);
    });
})