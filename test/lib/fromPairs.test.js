const { assert } = require("chai")
const _ = require("../../src/index.js")
const {
  InvalidArgumentError,
  MissingRequiredArgumentError,
} = require("../../src/error.js")

module.exports = () => {
  describe(".fromPairs", () => {
    it("returns an object", () => {
      assert.isObject(_.fromPairs([]))
    })

    it("returns an object of key value pairs from a multi-dimensional array", () => {
      const input = [
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ]
      const expected = {
        a: 1,
        b: 2,
        c: 3,
      }
      const actual = _.fromPairs(input)
      assert.deepEqual(actual, expected)
    })

    it("throws a SyntaxError when arr is undefined", () => {
      assert.throw(() => {
        _.fromPairs(undefined)
      }, MissingRequiredArgumentError.message)
    })

    it("throws a TypeError when passed a non-array type", () => {
      assert.throw(() => {
        _.fromPairs("")
      }, InvalidArgumentError.message)
    })
  })
}
