const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const historicalEvents = {
  frenchRevolution: "1789-1799",
  moonLanding: "July 20, 1969",
  silkRoad: ["1st century BCE", "14th century CE"],
  magnaCarta: {
    year: 1215,
    location: "Runnymede, England"
  }
};

const famousPersonalities = {
  leonardoDaVinci: "1452-1519",
  cleopatra: "69 BCE - 30 BCE",
  ameliaEarhart: "1897-1937",
  ghengisKhan: {
    birthYear: 1162,
    deathYear: 1227
  }
};

const eqObjects = function(obj1, obj2) {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};


assertEqual(eqObjects(historicalEvents, famousPersonalities), false);
assertEqual(eqObjects(historicalEvents, historicalEvents), true);