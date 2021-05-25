import { _ } from "../../src/index"
import { assert } from "chai"

describe(".intersection", () => {
  it("returns an array", () => {
    assert.isArray(_.intersection(["a"], ["b"]))
  })

  it("returns the intersection of two arrays", () => {
    const firstArr = ["a", "b", "c"]
    const secondArr = ["b", "c", "d"]
    const expected = ["b", "c"]
    const actual = _.intersection(firstArr, secondArr)
    assert.deepEqual(actual, expected)
  })

  it("returns the intersection of multiple arrays", () => {
    const firstArr = [1, 2, 3, 4, 5]
    const secondArr = [3, 6, 9]
    const thirdArr = [1, 3, 5]
    const fourthArr = [4, 2, 3]
    const expected = [3]
    const actual = _.intersection(firstArr, secondArr, thirdArr, fourthArr)
    assert.deepEqual(actual, expected)
  })

  it("ignores all non-array types in ...arrays", () => {
    const firstArr = [1, 2, 3]
    const secondArr = [2, 3]
    const nonArrType = "asdf"
    const expected = [2, 3]
    const actual = _.intersection(firstArr, nonArrType, secondArr)
    assert.deepEqual(actual, expected)
  })

  it("returns an empty array when none of the arrays passed intersect", () => {
    assert.isEmpty(_.intersection([1], [2], [3]))
  })

  it("returns an empty array when arr is empty", () => {
    assert.isEmpty(_.intersection([], ["a"]))
  })
})
