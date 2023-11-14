const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (arr) {
  return arr[0];
};

assertEqual(head(["Bootcamp", "wee", "knee"]), "Bootcamp");
assertEqual(head([5, 3, 1]), 1);
assertEqual(head(["Bootcamps", "Bootcamp"]), "Bootcamp");
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["😊😊😊", "😊😊"]), "😊😊😊");
assertEqual(head(["👌👌", "👌👌👌"]), "👌👌👌");