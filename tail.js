const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (arr) {
  let newArray = [];
  for (let i = 1; i < arr.length; i++){
    newArray.push(arr[i]);
  }
  return newArray;
};

console.log(tail([1, 2, 3]));
console.log(tail(["nooo", 2, "hello"]));
assertEqual(tail([2, "hello"]), "hello");
assertEqual(tail(["nooo", "hello"]), "hello");
assertEqual(tail([2, 'hello'])[0], "hello");