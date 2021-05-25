import { _ } from "../../src/index"
import { assert } from "chai"

describe(".initial", () => {
  it("returns an array", () => {
    assert.isArray(_.initial([]))
  })

  it("returns an array with the last element removed", () => {
    const input = [1, 2, 3]
    const expected = [1, 2]
    const actual = _.initial(input)
    assert.deepEqual(actual, expected)
  })

  it("works on nested arrays", () => {
    const input = [[1], [2], [3]]
    const expected = [[1], [2]]
    const actual = _.initial(input)
    assert.deepEqual(actual, expected)
  })

  it("works on deeply nested arrays", () => {
    const input = [[1, ["a", ["b"]]], [2], [3]]
    const expected = [[1, ["a", ["b"]]], [2]]
    const actual = _.initial(input)
    assert.deepEqual(actual, expected)
  })
})
