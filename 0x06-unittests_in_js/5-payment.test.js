// 5-payment.test.js
const sinon = require('sinon');
var { expect } = require('chai');

const sendPaymentRequestToApi = require('./5-payment');
//const Utils = require('./utils');

describe('Hooks.', function () {
  let consoleSpy;
  beforeEach(function () {
    // Spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy after each test
    consoleSpy.restore();
  });

  it('Logs 120 with 100, 20.', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('Logs 20 with 10, 10.', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
