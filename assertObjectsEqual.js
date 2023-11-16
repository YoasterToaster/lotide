const eqArrays = function(actual, expected) {
  //If the lengths are not the same then it will return false
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};

const eqObjects = function(obj1, obj2) {
  // Ill probably add more comments later but I am kinda tired and I console.log'd quite a ton.
  if (Object.entries(obj1).length === Object.entries(obj2).length) {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key] && !Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
        return false;
      } else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key]) && !eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const historicalEvents = {
  frenchRevolution: "1789-1799",
  moonLanding: "July 20, 1969",
  silkRoad: ["1st century BCE", "14th century CE"]
};
const historicalEvents2 = {
  frenchRevolution: "1789-",
  moonLanding: "July  1969",
  silkRoad: ["1st centuryCE", "14th century CE"]
};

const famousPersonalities = {
  leonardoDaVinci: "1452-1519",
  cleopatra: "69 BCE - 30 BCE",
  ameliaEarhart: "1897-1937"
};

assertObjectsEqual(historicalEvents, historicalEvents);
assertObjectsEqual(historicalEvents, historicalEvents2);
assertObjectsEqual(historicalEvents, famousPersonalities);
assertObjectsEqual(historicalEvents, true);
assertObjectsEqual(historicalEvents, false);