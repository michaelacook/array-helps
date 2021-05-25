import { _ } from "../../src/index"
import { assert } from "chai"

describe(".differenceWith", () => {
  it("returns an array", () => {
    assert.isArray(_.differenceWith([], undefined, []))
  })

  it("returns an array of filtered values based on a comparator callback", () => {
    const inputArr = [1, 2, 3]
    const compareArr = [2, 4, 5]
    const expected = [1, 3]
    const comparator = (a, b) => a === b
    const actual = _.differenceWith(inputArr, comparator, compareArr)
    assert.deepEqual(actual, expected)
  })

  it("returns a filtered array of strings based on a comparator", () => {
    const inputArr = ["ab", "defg", "hijkl", "a"]
    const compareArr = ["aaa", "bbb", "ccc", "ddd"]
    const comparator = (a, b) => a.length < b.length
    const expected = ["defg", "hijkl"]
    const actual = _.differenceWith(inputArr, comparator, compareArr)
    assert.deepEqual(actual, expected)
  })

  it("returns an empty array if first array is empty", () => {
    const inputArr = []
    const compareArr = [2, 4, 5]
    const expected = []
    const actual = _.differenceWith(inputArr, undefined, compareArr)
    assert.deepEqual(actual, expected)
  })

  it("defaults to ._difference behaviour if no comparator passed", () => {
    const inputArr = [1, 2, 3]
    const compareArr = [2, 4, 5]
    const expected = [1, 3]
    const actual = _.differenceWith(inputArr, undefined, compareArr)
    assert.deepEqual(actual, expected)
  })
})
