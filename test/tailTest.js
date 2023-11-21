const _ = require('../index.js');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(_.tail([1, 2, 3]), [2, 3]);
  });
  it("returns 1 for [2, 'hello'].length", () => {
    assert.strictEqual(_.tail([2, 'hello']).length, 1);
  });
  it("returns ['hello'] for [2, 'hello'][0]", () => {
    assert.strictEqual(_.tail([2, 'hello'])[0], 'hello');
  });
  it("returns [] for []", () => {
    assert.deepEqual(_.tail([]), []);
  });
  it("returns 0 for [].length", () => {
    assert.deepEqual(_.tail([]).length, 0);
  });
});