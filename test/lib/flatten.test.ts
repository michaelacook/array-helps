import { _ } from "../../src/index"
import { assert } from "chai"

describe(".flatten", () => {
  it("returns an array", () => {
    assert.isArray(_.flatten([]))
  })

  it("returns an array flattened one level deep", () => {
    const input = [1, [2, 3], 4]
    const expected = [1, 2, 3, 4]
    const actual = _.flatten(input)
    assert.deepEqual(actual, expected)
  })

  it("flattens a deeply nested array", () => {
    const input = [1, [2, [3, 4]], 5]
    const expected = [1, 2, [3, 4], 5]
    const actual = _.flatten(input)
    assert.deepEqual(actual, expected)
  })

  it("returns an empty array when passed an empty array", () => {
    assert.isOk(_.flatten([]).length === 0)
  })
})
