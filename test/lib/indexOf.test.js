const { assert } = require("chai")
const _ = require("../../src/index.js")
const {
  InvalidArgumentError,
  MissingRequiredArgumentError,
} = require("../../src/error.js")

module.exports = () => {
  describe(".indexOf", () => {
    it("returns a number", () => {
      assert.isNumber(_.indexOf(["a"], "a"))
    })

    it("returns the index for the first occurrence of an element", () => {
      const input = [false, false, false, true, false]
      const expected = 3
      const actual = _.indexOf(input, true)
      assert.deepEqual(actual, expected)
    })

    it("returns -1 if no match found", () => {
      const expected = -1
      const actual = _.indexOf([], "asdf")
      assert.deepEqual(actual, expected)
    })

    it("skips over all indices before start when start is non-zero", () => {
      const input = [true, false, false, true, true]
      const expected = 3
      const actual = _.indexOf(input, true, 1)
      assert.deepEqual(actual, expected)
    })

    it("uses a negative start as the offset from the end of arr", () => {
      const input = [1, 2, 3, 4, 5]
      const expected = -1
      const actual = _.indexOf(input, 4, -1)
      assert.deepEqual(actual, expected)
    })

    it("uses a negative start as the offset from the end of arr", () => {
      const input = [1, 4, 3, 4, 5]
      const expected = 3
      const actual = _.indexOf(input, 4, -3)
      assert.deepEqual(actual, expected)
    })

    it("throws a TypeError if arr is a non-array type", () => {
      assert.throw(() => {
        _.indexOf("", true)
      }, InvalidArgumentError.message)
    })

    it("throws a TypeError if start is a non-number type", () => {
      assert.throw(() => {
        _.indexOf([], true, "")
      }, InvalidArgumentError.message)
    })

    it("throws a SyntaxError if arr is undefined", () => {
      assert.throw(() => {
        _.indexOf(undefined, true)
      }, MissingRequiredArgumentError.message)
    })
  })
}
