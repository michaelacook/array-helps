import { _ } from "../../src/index"
import { assert } from "chai"

describe(".fill", () => {
  it("returns an array", () => {
    assert.isArray(_.fill([1, 2, 3], "a", 0))
  })

  it("returns an array with indices from start to finish filled with the given value", () => {
    const inputArr = [1, 2, 3, 4, 5, 6]
    const value = "a"
    const expected = [1, "a", "a", "a", 5, 6]
    const actual = _.fill(inputArr, value, 1, 4)
    assert.deepEqual(actual, expected)
  })

  it("fills a single index with a given value", () => {
    const inputArr = [1, 2, 3]
    const value = false
    const expected = [1, false, 3]
    const actual = _.fill(inputArr, value, 1, 2)
    assert.deepEqual(actual, expected)
  })

  it("fills an array with new values from start to finish", () => {
    const inputArr = [1, 2, 3]
    const value = "a"
    const expected = ["a", "a", "a"]
    const actual = _.fill(inputArr, value, 0)
    assert.deepEqual(actual, expected)
  })

  it("fills an empty array created by the Array constructor", () => {
    const inputArr = Array(3)
    const value = "a"
    const expected = ["a", "a", "a"]
    const actual = _.fill(inputArr, value, 0)
    assert.deepEqual(actual, expected)
  })

  it("starts filling from index 0 if start is omitted", () => {
    const inputArr = Array(3)
    const value = null
    const expected = [null, null, null]
    const actual = _.fill(inputArr, value)
    assert.deepEqual(actual, expected)
  })
})
