const { assert } = require("chai")
const { flatten } = require("../../src/index.js")
const {
  InvalidArgumentError,
  MissingRequiredArgumentError,
} = require("../../src/error.js")

module.exports = () => {
  describe(".flatten", () => {
    it("returns an array", () => {
      assert.isArray(flatten([]))
    })

    it("returns an array flattened one level deep", () => {
      const input = [1, [2, 3], 4]
      const expected = [1, 2, 3, 4]
      const actual = flatten(input)
      assert.deepEqual(actual, expected)
    })

    it("flattens a deeply nested array", () => {
      const input = [1, [2, [3, 4]], 5]
      const expected = [1, 2, [3, 4], 5]
      const actual = flatten(input)
      assert.deepEqual(actual, expected)
    })

    it("returns an empty array when passed an empty array", () => {
      assert.isOk(flatten([]).length === 0)
    })

    it("returns a SyntaxError when arr is undefined", () => {
      assert.throw(() => {
        flatten(undefined)
      }, MissingRequiredArgumentError.message)
    })

    it("throws a TypeError when passed a non-array type", () => {
      assert.throw(() => {
        flatten("")
      }, InvalidArgumentError.message)
    })
  })
}
