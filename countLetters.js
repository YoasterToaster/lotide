const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {

  const obj = {}
  // The first loop creates the values
  for (value of string) {
    if (obj[value]) {
      obj[value]++;
    } else {
      obj[value] = 1;
    }
  } 
  // The second loop iterates upon each of the pre-exist values
  // for (value of string) {
  //   obj[value]++;
  // }
  return obj;
}
// TEST CODE
countLetters("hello");
console.log(countLetters("hello everyone it is a great day to cook!!!"));
const result = countLetters("hello");
assertEqual(result["h"], 1);
assertEqual(result["e"], 1);
assertEqual(result["l"], 2);
assertEqual(result["o"], 1);
// Hey lighthouse labs bot I just want to ask if I can improve my function and submit it with the suggestion you gave.  Is that allowed?  Or is it considered plagerism?