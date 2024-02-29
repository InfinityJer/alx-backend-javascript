const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with correct arguments', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        calculateNumberSpy.restore();
    });

    it('should display the correct sum in the console', () => {
        const consoleSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
        consoleSpy.restore();
    });
});
