const { assert } = require("chai")
const _ = require("../../src/index.js")
const {
  InvalidArgumentError,
  MissingRequiredArgumentError,
} = require("../../src/error.js")

module.exports = () => {
  describe(".findIndex", () => {
    it("returns a number", () => {
      assert.isNumber(_.findIndex([], () => {}, 0))
    })

    it("returns the index of the second last element", () => {
      const input = [1, 2, 3, 4, 5]
      const expected = 3
      const predicate = (el) => el === 4
      const actual = _.findIndex(input, predicate, 0)
      assert.deepEqual(actual, expected)
    })

    it("returns -1 on empty array passed", () => {
      assert.deepEqual(
        -1,
        _.findIndex([], () => {}, 0)
      )
    })

    it("starts at the correct index supplied for start", () => {
      const input = [true, false, true, false, false]
      const expected = 2
      const predicate = (el) => el
      const start = 1
      const actual = _.findIndex(input, predicate, start)
      assert.deepEqual(actual, expected)
    })

    it("throws a TypeError if a non-array type is passed", () => {
      assert.throw(() => {
        _.findIndex("")
      }, InvalidArgumentError.message)
    })

    it("throws a SyntaxError if arr argument is omitted", () => {
      assert.throw(() => {
        _.findIndex(undefined, () => {}, 0)
      }, MissingRequiredArgumentError.message)
    })
  })
}
