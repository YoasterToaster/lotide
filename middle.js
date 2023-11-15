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

const middle = function (arr) {
  let newArray = [];
  // If the array length is too small it will return an empty array
  if (arr.length < 3) {
    return newArray;
  } else if (arr.length % 2 === 0) {
    // If the above if statement confirms that the array is an even number
    // Then this below code will push the two middle elements to a new array which will be returned
    newArray.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
  } else if (arr.length % 2 !== 0) { // if the arrays length is not divisible by 0 it returns the middle element
    newArray.push(arr[(arr.length - 1) / 2]);
  }
  return newArray;
};


// TEST CODE
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);
