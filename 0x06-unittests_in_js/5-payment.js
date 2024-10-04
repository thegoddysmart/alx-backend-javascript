// 5-payment.js
Utils = require('./utils');

Utils = require('./utils');
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
