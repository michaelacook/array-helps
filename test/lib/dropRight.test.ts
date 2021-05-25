import { _ } from "../../src/index"
import { assert } from "chai"

describe(".dropRight", () => {
  it("returns an array", () => {
    assert.isArray(_.dropRight([]))
  })

  it("returns an array from a specified number of elements dropped from the end", () => {
    const inputArr = [1, 2, 3, 4, 5]
    const expected = [1, 2, 3]
    const actual = _.dropRight(inputArr, 2)
    assert.deepEqual(actual, expected)
  })

  it("drops all elements from the array if num is equal to array length", () => {
    const inputArr = ["a", "b", "c"]
    const drop = 3
    const expected = []
    const actual = _.dropRight(inputArr, drop)
    assert.deepEqual(actual, expected)
  })

  it("returns an empty array if an empty array is passed", () => {
    const inputArr = []
    const expected = []
    const actual = _.dropRight(inputArr)
    assert.deepEqual(actual, expected)
  })
})
