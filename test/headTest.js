const head = require('../head.js')
const assertEqual = require('../assertEqual.js')

assertEqual(head(["Bootcamp", "wee", "knee"]), "Bootcamp");
assertEqual(head([5, 3, 1]), 5);
assertEqual(head(["Bootcamps", "Bootcamp"]), "Bootcamps");
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["😊😊😊", "😊😊"]), "😊😊😊");
assertEqual(head(["👌👌", "👌👌👌"]), "👌👌👌");