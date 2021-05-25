import { _ } from "../../src/index"
import { assert } from "chai"

describe(".flattenDeep", () => {
  it("returns an array", () => {
    assert.isArray(_.flattenDeep([]))
  })

  it("returns an array flattened to a single dimension", () => {
    const input = [[["a", ["b", ["c"]]], "d"]]
    const expected = ["a", "b", "c", "d"]
    const actual = _.flattenDeep(input)
    assert.deepEqual(actual, expected)
  })

  it("flattens a deeply nested array of empty arrays to a single empty array", () => {
    const input = [[[[[[]]]]]]
    const expected = []
    const actual = _.flattenDeep(input)
    assert.deepEqual(actual, expected)
  })

  it("returns an empty array when passed an empty array", () => {
    assert.isOk(!_.flattenDeep([]).length)
  })
})
