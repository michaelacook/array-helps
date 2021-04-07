const { assert } = require("chai")
const _ = require("../../src/index.js")
const {
  InvalidArgumentError,
  MissingRequiredArgumentError,
} = require("../../src/error.js")
const { findLastIndex } = require("../../src/index.js")

module.exports = () => {
  describe(".head", () => {
    it("returns the first element of the passed array", () => {
      const input = [1, 2, 3]
      const expectedIndex = 0
      const firstElement = _.head(input)
      const firstElIndex = input.indexOf(firstElement)
      assert.deepEqual(firstElIndex, expectedIndex)
    })

    it("throws a SyntaxError when passed no argument", () => {
      assert.throw(() => {
        _.head()
      }, MissingRequiredArgumentError.message)
    })

    it("throws a TypeError if passed a non-array type", () => {
      assert.throw(() => {
        _.head("")
      }, InvalidArgumentError.message)
    })

    it("returns undefined if passed an empty array", () => {
      assert.isUndefined(_.head([]))
    })

    it("returns undefined if passed an empty array with a non-zero length", () => {
      const input = new Array(1)
      assert.isUndefined(_.head(input))
    })
  })
}
