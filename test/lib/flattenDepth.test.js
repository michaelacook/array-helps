const { assert } = require("chai")
const _ = require("../../src/index.js")
const {
  InvalidArgumentError,
  MissingRequiredArgumentError,
} = require("../../src/error.js")

module.exports = () => {
  describe(".flattenNDeep", () => {
    it("returns an array", () => {
      assert.isArray(_.flattenDepth([]))
    })

    it("returns an array flattened any level deep", () => {
      const input = [[["a", ["b", ["c"]]], "d"]]
      const expected = ["a", "b", "c", "d"]
      const actual = _.flattenDepth(input, 4)
      assert.deepEqual(actual, expected)
    })

    it("returns an array flattened 1 level deep when passed no n argument", () => {
      const input = [[["a", ["b", ["c"]]], "d"]]
      const expected = [["a", ["b", ["c"]]], "d"]
      const actual = _.flattenDepth(input)
      assert.deepEqual(actual, expected)
    })

    it("flattens a deeply nested array of empty arrays to a single empty array", () => {
      const input = [[[[[[]]]]]]
      const expected = []
      const actual = _.flattenDepth(input, 6)
      assert.deepEqual(actual, expected)
    })

    it("returns an array flattened to a single dimension when n is greater than the depth of the array", () => {
      const input = [[["a", ["b", ["c"]]], "d"]]
      const expected = ["a", "b", "c", "d"]
      const actual = _.flattenDepth(input, 10)
      assert.deepEqual(actual, expected)
    })

    it("returns an empty array if passed an empty array", () => {
      assert.isOk(!_.flattenDepth([]).length)
    })

    it("throws a SyntaxError if arr is undefined", () => {
      assert.throw(() => {
        _.flattenDepth(undefined)
      }, MissingRequiredArgumentError.message)
    })

    it("throws a TypeError when passed a non-array type", () => {
      assert.throw(() => {
        _.flattenDepth("")
      }, InvalidArgumentError.message)
    })
  })
}
