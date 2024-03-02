// Importing the necessary libraries for making HTTP requests and performing assertions
const request = require('request');
const { expect } = require('chai');

// Describing the test suite for API integration testing
describe('API integration test', () => {
  // Defining the base URL for the API
  const API_URL = 'http://localhost:7865';

  // Test case for verifying the response of the GET / endpoint
  it('GET / returns correct response', (done) => {
    // Making a GET request to the root endpoint of the API
    request.get(`${API_URL}/`, (_err, res, body) => {
      // Asserting that the status code of the response is 200
      expect(res.statusCode).to.be.equal(200);
      // Asserting that the body of the response matches the expected welcome message
      expect(body).to.be.equal('Welcome to the payment system');
      // Calling the done() function to indicate the completion of the test
      done();
    });
  });
});
