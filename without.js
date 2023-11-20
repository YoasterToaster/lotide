const without = function (actual, expected) {
  let newArray = [];
  for (let i = 0; i < actual.length; i++) {
    for (let j = 0; j < expected.length; j++){
      if (actual[i] === expected[j]){
        actual.slice(i, 1);
      }
    }
  }
  console.log(actual);
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

without([1, 2, 3], [1]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["Bootcamps", "wee"], ["Bootcamps", "wee"]);
assertArraysEqual(["Bootcamps", "wee"], ["Bootcamps", "wee"]);
assertArraysEqual(["Bootcamps", "wee"], ["Bootcamps", "wee"]);