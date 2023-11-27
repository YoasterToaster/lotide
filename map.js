const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual.js');
const eqArrays = require('./eqArrays.js');

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

console.log(map(words, word => word + word));

assertArraysEqual(map(words, word => word += word), ["groundground", "controlcontrol", "toto", "majormajor", "tomtom"])
assertEqual(eqArrays(map([1, 2, 3], num => num -= 1), [0, 1, 2]), true);
module.exports = map;