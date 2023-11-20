const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (arr) {
  let newArray = [];
  newArray = arr.slice(1);
  return newArray;
};
let orignalArray = [0, 1, 2, 4];
let array1 = [1];
assertEqual(orignalArray.length, 4);
console.log(tail([1, 2, 3]));
assertEqual(orignalArray.length, 4);
console.log(tail(["nooo", 2, "hello"]));
assertEqual(tail([2, "hello"]).length, 1);
assertEqual(tail(["nooo", 2, "hello"])[1], "hello");
assertEqual(tail([2, 'hello'])[0], "hello");
assertEqual(tail(array1).length, 0);
assertEqual(tail([]).length, 0);