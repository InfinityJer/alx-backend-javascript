// Importing the 'request' library for making HTTP requests
const request = require('request');
// Importing the 'expect' function from the 'chai' library for assertions
const { expect } = require('chai');

// Test suite for API integration testing
describe('API integration test', () => {
  // Define the base URL for the API
  const API_URL = 'http://localhost:7865';

  // Test case for verifying the correct response of the GET / endpoint
  it('GET / returns correct response', (done) => {
    // Making a GET request to the root endpoint of the API
    request.get(`${API_URL}/`, (_err, res, body) => {
      // Expecting the response status code to be 200 (OK)
      expect(res.statusCode).to.be.equal(200);
      // Expecting the response body to be the welcome message
      expect(body).to.be.equal('Welcome to the payment system');
      // Callback function indicating completion of the test
      done();
    });
  });

  // Test case for verifying the correct response of the GET /cart/:id endpoint with a valid ID
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    // Making a GET request to the /cart/:id endpoint with a specific ID
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      // Expecting the response status code to be 200 (OK)
      expect(res.statusCode).to.be.equal(200);
      // Expecting the response body to contain the correct message
      expect(body).to.be.equal('Payment methods for cart 47');
      // Callback function indicating completion of the test
      done();
    });
  });

  // Test case for verifying the response of the GET /cart/:id endpoint with a negative ID
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    // Making a GET request to the /cart/:id endpoint with a negative ID
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      // Expecting the response status code to be 404 (Not Found)
      expect(res.statusCode).to.be.equal(404);
      // Callback function indicating completion of the test
      done();
    });
  });

  // Test case for verifying the response of the GET /cart/:id endpoint with a non-numeric ID
  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    // Making a GET request to the /cart/:id endpoint with a non-numeric ID
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      // Expecting the response status code to be 404 (Not Found)
      expect(res.statusCode).to.be.equal(404);
      // Callback function indicating completion of the test
      done();
    });
  });
});
