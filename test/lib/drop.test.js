const { assert } = require("chai")
const _ = require("../../src/index.js")
const { InvalidArgumentError } = require("../../src/error.js")

module.exports = () => {
  describe(".drop", () => {
    it("returns an array", () => {
      assert.isArray(_.drop([]))
    })

    it("returns a slice of an array starting from a given number", () => {
      const inputArr = [1, 2, 3]
      const slice = 1
      const expected = [2, 3]
      const actual = _.drop(inputArr, slice)
      assert.deepEqual(actual, expected)
    })

    it("drops the first item from an array if no num is passed", () => {
      const inputArr = ["a", "b", "c"]
      const expected = ["b", "c"]
      const actual = _.drop(inputArr)
      assert.deepEqual(actual, expected)
    })

    it("returns an empty array if passed an empty array", () => {
      const inputArr = []
      const expected = []
      const actual = _.drop(inputArr)
      assert.deepEqual(actual, expected)
    })

    it("throws a TypeError if passed a non-array type", () => {
      assert.throw(() => {
        _.drop("")
      }, InvalidArgumentError.message)
    })
  })
}
