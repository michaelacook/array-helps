const { assert } = require("chai")
const _ = require("../src/index.js")

describe("_", () => {
  describe(".chunk", () => {
    it("returns an array", () => {
      const input = []
      assert.isArray(_.chunk(input))
    })

    it("returns a 2D array with a length of 3", () => {
      const input = ["a", "b", "c", "d", "e", "f"]
      const expected = [
        ["a", "b"],
        ["c", "d"],
        ["e", "f"],
      ]
      const actual = _.chunk(input, 2)
      assert.deepEqual(actual, expected)
    })

    it("returns a 2D array with a remainder chunk with a length of 1", () => {
      const input = ["a", "b", "c", "d", "e"]
      const expected = [["a", "b"], ["c", "d"], ["e"]]
      const actual = _.chunk(input, 2)
      assert.deepEqual(actual, expected)
    })

    it("returns a 2D array with chunks containing only Number types", () => {
      const input = [1, 2, 3]
      const actual = _.chunk(input, 1)
      actual.forEach((chunk) => {
        assert.typeOf(chunk[0], "number", "is a number")
      })
    })
  })

  describe(".compact", () => {
    it("returns an array type", () => {
      assert.isArray(_.compact([]))
    })

    it("returns an empty array when given an array containing each falsey value", () => {
      const input = [0, null, false, undefined, NaN, ""]
      const expected = []
      const actual = _.compact(input)
      assert.deepEqual(actual, expected)
    })

    it("returns an array containing only letters and numbers", () => {
      const input = [0, 1, null, "a", NaN, "b", false, "c", undefined, ""]
      const expected = [1, "a", "b", "c"]
      const actual = _.compact(input)
      assert.deepEqual(actual, expected)
    })
  })
})
