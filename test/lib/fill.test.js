const { assert } = require("chai")
const _ = require("../../src/index.js")
const {
  InvalidArgumentError,
  MissingRequiredArgumentError,
} = require("../../src/error.js")

module.exports = () => {
  describe(".fill", () => {
    it("returns an array", () => {
      assert.isArray(_.fill([1, 2, 3], "a", 0))
    })

    it("returns an array with indices from start to finish filled with the given value", () => {
      const inputArr = [1, 2, 3, 4, 5, 6]
      const value = "a"
      const expected = [1, "a", "a", "a", 5, 6]
      const actual = _.fill(inputArr, value, 1, 4)
      assert.deepEqual(actual, expected)
    })

    // failing
    it("fills a single index with a given value", () => {
      const inputArr = [1, 2, 3]
      const value = false
      const expected = [1, false, 3]
      const actual = _.fill(inputArr, value, 1, 2)
      assert.deepEqual(actual, expected)
    })

    it("fills an array with new values from start to finish", () => {
      const inputArr = [1, 2, 3]
      const value = "a"
      const expected = ["a", "a", "a"]
      const actual = _.fill(inputArr, value, 0)
      assert.deepEqual(actual, expected)
    })

    it("fills an empty array created by the Array constructor", () => {
      const inputArr = Array(3)
      const value = "a"
      const expected = ["a", "a", "a"]
      const actual = _.fill(inputArr, value, 0)
      assert.deepEqual(actual, expected)
    })

    it("throws a TypeError when passed a non-array type", () => {
      assert.throw(() => {
        _.fill("", "a", 0)
      }, InvalidArgumentError.message)
    })

    it("throws a SyntaxError when a value is not passed", () => {
      assert.throw(() => {
        _.fill([], undefined, 0)
      }, MissingRequiredArgumentError.message)
    })
  })
}
