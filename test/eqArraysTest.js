const _ = require('../index.js');
const assert = require('chai').assert;

describe('#head', () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [1, 2, 3], [1, 2]", () => {
    assert.strictEqual(_.eqArrays([1, 2, 3], [1, 2]), false);
  });
  it("returns ['Bootcamps', 'wee'] for [1, 2, 3]", () => {
    assert.strictEqual(_.eqArrays(['Bootcamps', 'wee'], ['Bootcamps', 'wee']), true);
  });
  it("returns false for ['Bootcamps', 'wee'], ['Bootcamps', 'weee']", () => {
    assert.strictEqual(_.eqArrays(['Bootcamps', 'wee'], ['Bootcamps', 'weee']), false);
  });
});