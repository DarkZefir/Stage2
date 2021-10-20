const { expect } = require('chai');
const Calculator = require('../app/calc.js');

describe('add should return sum', function () {
    let result;

    beforeEach(function () {
        result = new Calculator();

    });
    it('should return sum of numbers', function () {
        let result = new Calculator;
        expect(result.add(4, 5)).to.be.equal(9)
    })
});
describe('multiply should return product of numbers', function () {
    let result2;
    beforeEach(function () {
        result2 = new Calculator();
    });
    it('should return product of numbers', function () {
        let result2 = new Calculator();
        expect(result2.multiply(3, 4)).to.be.equal(12)
    })
});
const a = 2;