const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays(["Bootcamps", "wee"], ["Bootcamps", "wee"]), true);
assertEqual(eqArrays(["Bootcamps", "wee"], ["Bootcamps", "wee"]), false);
assertEqual(eqArrays(["Bootcamps", "wee"], ["Bootcamps", "wee"]), false);