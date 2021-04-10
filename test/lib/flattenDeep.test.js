const { assert } = require("chai")
const { flattenDeep } = require("../../src/index.js")
const {
  InvalidArgumentError,
  MissingRequiredArgumentError,
} = require("../../src/error.js")

module.exports = () => {
  describe(".flattenDeep", () => {
    it("returns an array", () => {
      assert.isArray(flattenDeep([]))
    })

    it("returns an array flattened to a single dimension", () => {
      const input = [[["a", ["b", ["c"]]], "d"]]
      const expected = ["a", "b", "c", "d"]
      const actual = flattenDeep(input)
      assert.deepEqual(actual, expected)
    })

    it("flattens a deeply nested array of empty arrays to a single empty array", () => {
      const input = [[[[[[]]]]]]
      const expected = []
      const actual = flattenDeep(input)
      assert.deepEqual(actual, expected)
    })

    it("returns an empty array when passed an empty array", () => {
      assert.isOk(!flattenDeep([]).length)
    })

    it("throws a SyntaxError when arr is undefined", () => {
      assert.throw(() => {
        flattenDeep(undefined)
      }, MissingRequiredArgumentError.message)
    })

    it("throws a TypeError when passed a non-array type", () => {
      assert.throw(() => {
        flattenDeep("")
      }, InvalidArgumentError.message)
    })
  })
}
