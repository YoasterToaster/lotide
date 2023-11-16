const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const historicalEvents = {
  frenchRevolution: "1789-1799",
  moonLanding: "July 20, 1969",
  silkRoad: ["1st century BCE", "14th century CE"]
};

const famousPersonalities = {
  leonardoDaVinci: "1452-1519",
  cleopatra: "69 BCE - 30 BCE",
  ameliaEarhart: "1897-1937"
};

const eqObjects = function(obj1, obj2) {
  if (Object.entries(obj1).length === Object.entries(obj2).length) {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key] && obj2[key] !== obj1[key] && !Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
        return false;
      } else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key]) && !eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
};

eqObjects(historicalEvents, historicalEvents);
assertEqual(eqObjects(historicalEvents, famousPersonalities), false);
assertEqual(eqObjects(historicalEvents, historicalEvents), true);