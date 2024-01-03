// 7-load_balancer.js

/**
 * Returns the value returned by the promise that resolved first.
 * @param {Promise} chinaDownload - Promise representing download from China.
 * @param {Promise} USDownload - Promise representing download from the US.
 * @returns {Promise} - Promise that resolves with the value from the first resolved promise.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
