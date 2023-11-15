const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (actual, expected) {
  //If the lengths are not the same then it will return false
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertArraysEqual(eqArrays(["Bootcamps", "wee"], ["Bootcamps", "wee"]), true);
assertArraysEqual(eqArrays(["Bootcamps", "wee"], ["Bootcamps", "wee"]), false);
assertArraysEqual(eqArrays(["Bootcamps", "wee"], ["Bootcamps", "wee"]), false);