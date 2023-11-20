const without = function (actual, expected) {
  // Coming back to this question later, I am going to take this opportunity to test out the filter method()
  let newArray = actual.filter(item => !expected.includes(item));
  console.log(newArray);
  return newArray;
};

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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], [55]), [1, 2, 3]);
assertArraysEqual(without([], []), []);
assertArraysEqual(without(["hello", "sir", "sirius"], ["sir"]), ["hello", "sirius"]);
assertArraysEqual(without(["hello", "sir", "sirius"], ["Sir"]), ["hello", "sir", "sirius"]);