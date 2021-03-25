const { assert } = require("chai")
const _ = require("../../src/index.js")
const InvalidArgumentError = require("../../src/error.js")

module.exports = () => {
  describe(".concat", () => {
    it("returns an array", () => {
      assert.isArray(_.concat([]))
    })

    it("returns an a new array concatenating an array with passed values", () => {
      const inputArray = [1, 2, 3]
      const expected = [1, 2, 3, "a", "b", "c"]
      const actual = _.concat(inputArray, "a", "b", "c")
      assert.deepEqual(actual, expected)
    })

    it("returns an array with inner arrays when passed a multi-dimensional array as an argument", () => {
      const inputArray = [1, 2, 3]
      const expected = [1, 2, 3, [4]]
      const actual = _.concat(inputArray, [[4]])
      assert.deepEqual(actual, expected)
    })

    it("throws a TypeError when passed a non-array type", () => {
      assert.throw(() => {
        _.concat("")
      }, InvalidArgumentError.message)
    })
  })
}
