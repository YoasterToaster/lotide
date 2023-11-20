const assert = require('chai').assert;
const middle = require('../middle.js');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns '3' for [5, 3, 1]", () => {
    assert.deepEqual(middle([5, 3, 1]), [3]); 
  });
  it("returns 'wee' for [Bootcamp, wee, knee]", () => {
    assert.deepEqual(middle(["Bootcamp", "wee", "knee"]), ["wee"]); 
  });
  it("returns '😊😊' for ['😊😊😊', '😊😊'. '😊😊😊']", () => {
    assert.deepEqual(middle(["😊😊😊", "😊😊", "😊😊😊"]), ["😊😊"]); 
  });
  it("returns '👌👌👌' for ['👌👌', '👌👌👌', '👌👌']", () => {
    assert.deepEqual(middle(['👌👌', '👌👌👌', '👌👌']), ['👌👌👌']); 
  });
});