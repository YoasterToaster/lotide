const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');

let orignalArray = [0, 1, 2, 4];
let array1 = [1];
assertEqual(orignalArray.length, 4);
console.log(tail([1, 2, 3]));
assertEqual(orignalArray.length, 4);
console.log(tail(["nooo", 2, "hello"]));
assertEqual(tail([2, "hello"]).length, 1);
assertEqual(tail(["nooo", 2, "hello"])[1], "hello");
assertEqual(tail([2, 'hello'])[0], "hello");
assertEqual(tail(array1).length, 0);
assertEqual(tail([]).length, 0);