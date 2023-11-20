const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const assertObjectsEqual = require('./assertObjectsEqual');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  countLetters: countLetters,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  letterPositions: letterPositions,
  countOnly: countOnly,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  takeUntil: takeUntil,
  without: without
};