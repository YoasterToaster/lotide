const head = require('../head.js');
const assert = require('chai').assert;
const assertEqual = require('../assertEqual.js');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns '5' for [5, 3, 1]", () => {
    assert.strictEqual(head([5, 3, 1]), 5); 
  });
  it("returns 'Bootcamp' for [Bootcamp, wee, knee]", () => {
    assert.strictEqual(head(["Bootcamp", "wee", "knee"]), "Bootcamp"); 
  });
  it("returns 'Bootcamp' for [Bootcamps, Bootcamp]", () => {
    assert.strictEqual(head(["Bootcamps", "Bootcamp"]), 'Bootcamps'); 
  });
  it("returns '1' for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1); 
  });
  it("returns '😊😊😊' for ['😊😊😊', '😊😊]", () => {
    assert.strictEqual(head(["😊😊😊", "😊😊"]), "😊😊😊"); 
  });
  it("returns '👌👌👌' for ['👌👌', '👌👌👌']", () => {
    assert.strictEqual(head(['👌👌', '👌👌👌']), '👌👌'); 
  });
});