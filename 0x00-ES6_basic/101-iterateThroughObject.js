// 101-iterateThroughObject.js

// 101-iterateThroughObject.js

export default function iterateThroughObject(reportWithIterator) {
  const resultArray = [];

  for (const employee of reportWithIterator) {
    resultArray.push(employee);
  }

  return resultArray.join(' | ');
}
