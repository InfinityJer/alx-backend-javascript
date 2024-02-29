function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: 'Successful response from the API' });
        } else {
            // For simplicity, when success is false, we're not doing anything
            // You can add more complex logic here if needed
            resolve();
        }
    });
}

module.exports = getPaymentTokenFromAPI;
