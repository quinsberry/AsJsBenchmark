const assert = require('assert')
const myModule = require('..')
assert.strictEqual(myModule.add(1, 2), 3)
console.log('add: ok')
assert.strictEqual(myModule.factorial(3), 6)
console.log('factorial: ok')
assert.deepStrictEqual(myModule.squareArrayGen(3), new Int32Array([0, 1, 4]))
console.log('squareArrayGen: ok')
