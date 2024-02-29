const { expect } = require('chai');
const request = require('request');
const server = require('./api.js');

describe('Login endpoint', () => {
  it('should return correct welcome message', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      body: { userName: 'Betty' },
      json: true
    }, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('should return correct available payments', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});
