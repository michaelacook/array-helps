import { _ } from "../../src/index"
import { assert } from "chai"

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
})
