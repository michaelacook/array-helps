const { assert } = require("chai")
const _ = require("../../src/index.js")
const { InvalidArgumentError } = require("../../src/error.js")

module.exports = () => {
  describe(".differenceBy", () => {
    it("returns an array", () => {
      assert.isArray(_.differenceBy([], [1, 2, 3]))
    })

    it("returns an array of filtered values as determined by an iteratee callback", () => {
      const inputArr = [1, 2, 3, 5, 6]
      const compareArr = [1, 2, 3, 8, 10]
      const iteratee = Math.floor
      const expected = [5, 6]
      const actual = _.differenceBy(inputArr, iteratee, compareArr)
      assert.deepEqual(actual, expected)
    })

    it("defaults to .difference behaviour if no iteratee is passed", () => {
      const inputArr = [1, 2, 3]
      const expected = [1]
      const actual = _.differenceBy(inputArr, undefined, [2], [3])
      assert.deepEqual(actual, expected)
    })

    it("works properly when passed arrays containing floating point numbers", () => {
      const inputArr = [2.1, 1.2]
      const compareArr = [2.3, 3.4]
      const iteratee = Math.floor
      const expected = [1.2]
      const actual = _.differenceBy(inputArr, iteratee, compareArr)
      assert.deepEqual(actual, expected)
    })

    it("throws a TypeError when passed a non-array type as first arg", () => {
      assert.throw(() => {
        _.differenceBy("", undefined, [1])
      }, InvalidArgumentError.message)
    })
  })
}
