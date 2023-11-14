const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual("Bootcamp", "Bootcamp");
assertEqual(5, 1);
assertEqual("Bootcamps", "Bootcamp");
assertEqual(1, 1);
assertEqual("😊😊😊", "😊😊😊");
assertEqual("👌👌", "👌👌👌");
