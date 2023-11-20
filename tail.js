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
assertEqual(tail([2, "hello"]).length, 1);
assertEqual(tail(["nooo", 2, "hello"])[1], [2, "hello"][1]);
assertEqual(tail([2, 'hello'])[0], "hello");
assertEqual(tail([2, 3, 4, 3, 7]).length, 4);