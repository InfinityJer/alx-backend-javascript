const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('should return the sum of two rounded numbers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should return the sum of two rounded numbers for the second number rounded', () => {
        assert.strictEqual(calculateNumber(3, 1), 4);
        assert.strictEqual(calculateNumber(3.7, 1), 5);
        assert.strictEqual(calculateNumber(3.7, 1.2), 5);
        assert.strictEqual(calculateNumber(3.7, 1.5), 6);
    });
});
