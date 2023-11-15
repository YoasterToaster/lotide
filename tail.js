const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (arr) {
  return arr.slice(1);
};

console.log(tail([1, 2, 3]));
console.log(tail(["nooo", 2, "hello"]));
assertEqual(tail([2, "hello"]), "hello");
assertEqual(tail(["nooo", 2, "hello"]), "Hello");
assertEqual(tail([2, 'hello']), "hello");