const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), 1);
assertEqual(eqArrays(["Bootcamps", "wee"], ["Bootcamps", "wee"]), eqArrays(["Bootcamps", "wee"], ["Bootcamps", "wee"]));
assertEqual(eqArrays(["Bootcamps", "wee"], ["Bootcamps", "wee"]), ["Bootcamps", "wee"]);
assertEqual(eqArrays(["Bootcamps", "wee"], ["Bootcamps", "wee"]), [1, 2]);