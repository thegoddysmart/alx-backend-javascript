// 4-payment.test.js
const sinon = require('sinon');
var { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Stubs.', function () {
  it('Ensures math is the same.', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber');
    stubUtils.returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the stub and spy after each test
    stubUtils.restore();
    consoleSpy.restore();
  });
});
