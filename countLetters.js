const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {

  const obj = {};
  let regex = /[a-zA-Z]/;
  // Checks if value is a letter then creates the value so I can then iterate it since it exists because you cannot create an object value and increment it in the same statement
  for (let value of string) {
    if (regex.test(value)) {
      if (obj[value]) {
        obj[value]++;
      } else {
        obj[value] = 1;
      }
    }
  }
  return obj;
};
// TEST CODE
console.log(countLetters("hello"));
const result = countLetters("hello");
assertEqual(result["h"], 1);
assertEqual(result["e"], 1);
assertEqual(result["l"], 2);
assertEqual(result["o"], 1);

module.exports = countLetters;