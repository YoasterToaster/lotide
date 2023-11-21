const assert = require('chai').assert;
const _ = require('../index.js');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(_.middle([1, 2]), []);
  });
  it("returns '3' for [5, 3, 1]", () => {
    assert.deepEqual(_.middle([5, 3, 1]), [3]); 
  });
  it("returns 'wee' for [Bootcamp, wee, knee]", () => {
    assert.deepEqual(_.middle(["Bootcamp", "wee", "knee"]), ["wee"]); 
  });
  it("returns '😊😊' for ['😊😊😊', '😊😊'. '😊😊😊']", () => {
    assert.deepEqual(_.middle(["😊😊😊", "😊😊", "😊😊😊"]), ["😊😊"]); 
  });
  it("returns '👌👌👌' for ['👌👌', '👌👌👌', '👌👌']", () => {
    assert.deepEqual(_.middle(['👌👌', '👌👌👌', '👌👌']), ['👌👌👌']); 
  });
  it("returns ['👌👌👌', '👌👌'] for ['👌👌', '👌👌👌', '👌👌', '👌👌']", () => {
    assert.deepEqual(_.middle(['👌👌', '👌👌👌', '👌👌', '👌👌']), ['👌👌👌', '👌👌']); 
  });
});