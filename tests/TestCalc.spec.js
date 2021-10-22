const { expect } = require('chai');

const Calculator = require('../app/calc.js');

describe('Calculator', function () {
    const calc = new Calculator();

    it('should return sum of numbers', function () {
        expect(calc.add(4, 5)).to.be.equal(9);
    });

    it('should return product of numbers', function () {
        expect(calc.multiply(3, 4)).to.be.equal(12);
    });
});