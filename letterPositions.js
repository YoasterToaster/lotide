const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (!eqArrays(actual, expected)) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
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

const letterPositions = function(sentence) {
  const obj = {};
  let regex = /[a-zA-Z]/;
  // Checks if value is a letter then creates the value so I can then iterate it since it exists because you cannot create an object value and increment it in the same statement
  for (let i = 0; i < sentence.length; i++) {
    if (regex.test(sentence[i])) {
      if (obj[sentence[i]]) {
        obj[sentence[i]].push(i);
      } else {
        obj[sentence[i]] = [i];
      }
    }
  }
  return obj;
};
//TEST CODE
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);