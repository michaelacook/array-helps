const { assert } = require("chai")
const _ = require("../../src/index.js")
const {
  InvalidArgumentError,
  MissingRequiredArgumentError,
} = require("../../src/error.js")

module.exports = () => {
  describe(".dropWhile", () => {
    it("returns an array", () => {
      assert.isArray(_.dropWhile([], () => {}))
    })

    it("removes elements fromt the start of the array until predicate returns falsey", () => {
      const inputArr = [1, 2, 3, 4, 5]
      const predicate = (el) => el < 4
      const expected = [4, 5]
      const actual = _.dropWhile(inputArr, predicate)
      assert.deepEqual(actual, expected)
    })

    it("returns an empty array if passed an empty array", () => {
      const inputArr = []
      const expected = []
      const actual = _.dropWhile(inputArr, () => {})
      assert.deepEqual(actual, expected)
    })

    it("throws a SyntaxError when not passed a predicate callback", () => {
      assert.throw(() => {
        _.dropWhile([])
      }, MissingRequiredArgumentError.message)
    })

    it("throws a TypeError when a non-array type is passed", () => {
      assert.throw(() => {
        _.dropWhile("", () => {})
      }, InvalidArgumentError.message)
    })
  })
}
