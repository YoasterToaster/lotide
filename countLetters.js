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
  return obj;
}

countLetters("hello");

// Hey lighthouse labs bot I just want to ask again, how do I use assertEqual to test this?  Please gives examples because its really not that clear