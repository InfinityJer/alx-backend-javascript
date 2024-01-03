// 0-promise.js

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // You can perform asynchronous operations here
    // For simplicity, let's resolve the Promise immediately
    resolve('API response data');
  });
}

export default getResponseFromAPI;
