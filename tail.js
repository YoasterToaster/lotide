const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++){
    newArr.push(arr[i]);
  }
  return newArr;
};

assertEqual(tail(["Bootcamp", "wee", "knee"]), "Bootcamp");
assertEqual(tail([5, 3, 1]), 1);
assertEqual(tail(["Bootcamps", "Bootcamp"]), "Bootcamp");
assertEqual(tail([1, 2, 3]), 1);
assertEqual(tail(["😊😊😊", "😊😊"]), "😊😊😊");
assertEqual(tail(["👌👌", "👌👌👌"]), "👌👌👌");