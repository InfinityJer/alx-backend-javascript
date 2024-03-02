// Import the 'request' library for making HTTP requests
const request = require('request');

// Import the 'expect' function from the 'chai' library for assertions
const { expect } = require('chai');

// Describe block for API integration tests
describe('API integration test', () => {
  // Define the base URL of the API to be tested
  const API_URL = 'http://localhost:7865';

  // Test case for GET / endpoint
  it('GET / returns correct response', (done) => {
    // Make a GET request to the API endpoint
    request.get(`${API_URL}/`, (_err, res, body) => {
      // Assert the status code and response body
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      // Call done() to indicate that the test is complete
      done();
    });
  });

  // Test case for GET /cart/:id endpoint with valid :id
  it('GET /cart/:id returns correct response for valid :id', (done) => {
    // Make a GET request to the API endpoint with a valid cart ID
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      // Assert the status code and response body
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      // Call done() to indicate that the test is complete
      done();
    });
  });

  // Test case for GET /cart/:id endpoint with negative :id
  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    // Make a GET request to the API endpoint with a negative cart ID
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      // Assert the status code
      expect(res.statusCode).to.be.equal(404);
      // Call done() to indicate that the test is complete
      done();
    });
  });

  // Test case for GET /cart/:id endpoint with non-numeric :id
  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    // Make a GET request to the API endpoint with a non-numeric cart ID
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      // Assert the status code
      expect(res.statusCode).to.be.equal(404);
      // Call done() to indicate that the test is complete
      done();
    });
  });

  // Test case for POST /login endpoint
  it('POST /login returns valid response', (done) => {
    // Make a POST request to the API endpoint with a username in the request body
    request.post(`${API_URL}/login`, { json: { userName: 'Pinkbrook' } }, (_err, res, body) => {
      // Assert the status code and response body
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook');
      // Call done() to indicate that the test is complete
      done();
    });
  });

  // Test case for GET /available_payments endpoint
  it('GET /available_payments returns valid response', (done) => {
    // Make a GET request to the API endpoint
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      // Assert the status code and response body
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      // Call done() to indicate that the test is complete
      done();
    });
  });
});
