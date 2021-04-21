const { assert } = require("chai")
const _ = require("../../src/index.js")
const {
  InvalidArgumentError,
  MissingRequiredArgumentError,
} = require("../../src/error.js")

module.exports = () => {
  describe(".intersectionBy", () => {
    it("returns an array", () => {
      assert.isArray(_.intersectionBy([], () => {}, []))
    })

    it("returns an empty array when arr is empty", () => {
      assert.isEmpty(_.intersectionBy([], () => {}, []))
    })

    it("returns the intersection of two arrays based on an iteratee", () => {
      const firstArr = [2.1, 1.2]
      const predicate = Math.floor
      const secondArr = [2.3, 3.4]
      const expected = [2.1]
      const actual = _.intersectionBy(firstArr, predicate, secondArr)
      assert.deepEqual(actual, expected)
    })

    it("returns the intersection of multiple arrays based on an iteratee", () => {
      const firstArr = [1, 2, 3]
      const secondArr = [1, 2, 9, 13]
      const thirdArr = [5, 17]
      const iteratee = (val) => val % 2 !== 0
      const expected = [3, 9, 13, 5, 17]
      const actual = _.intersectionBy(firstArr, iteratee, secondArr, thirdArr)
    })

    it("functions as .intersect when no iteratee passsed", () => {
      const firstArr = [2.1, 1.2]
      const secondArr = [2.3, 3.4]
      const expected = []
      const actual = _.intersectionBy(firstArr, undefined, secondArr)
      assert.deepEqual(actual, expected)
    })

    it("ignores non-array types in arrays", () => {
      const firstArr = [2.1, 1.2]
      const predicate = Math.floor
      const secondArr = [2.3, 3.4]
      const expected = [2.1]
      const actual = _.intersectionBy(firstArr, predicate, "asdf", secondArr)
      assert.deepEqual(actual, expected)
    })

    it("throws a SyntaxError when arr is undefined", () => {
      assert.throw(() => {
        _.intersectionBy(undefined, () => {}, [])
      }, MissingRequiredArgumentError.message)
    })

    it("throws a TypeError when arr is a non-array type", () => {
      assert.throw(() => {
        _.intersectionBy("", () => {}, [])
      }, InvalidArgumentError.message)
    })

    it("throws a TypeError when iteratee is not a function", () => {
      assert.throw(() => {
        _.intersectionBy([], "", [])
      }, InvalidArgumentError.message)
    })
  })
}
