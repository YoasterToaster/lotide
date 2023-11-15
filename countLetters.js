const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string){

  const obj = {}
  // The first loop creates the values
  for (value of string){
    obj[value] = 0;
  }
  // The second loop iterates upon each of the pre-exist values
  for (value of string){
    obj[value]++;
  }
  console.log(obj);
}

countLetters("hello");

// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(5, 1);
// assertEqual("Bootcamps", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("😊😊😊", "😊😊😊");
// assertEqual("👌👌", "👌👌👌");