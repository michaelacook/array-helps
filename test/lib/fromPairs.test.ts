import { _ } from "../../src/index"
import { assert } from "chai"

describe(".fromPairs", () => {
  it("returns an object", () => {
    assert.isObject(_.fromPairs([]))
  })

  it("returns an object of key value pairs from a multi-dimensional array", () => {
    const input = [
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ]
    const expected = {
      a: 1,
      b: 2,
      c: 3,
    }
    const actual = _.fromPairs(input)
    assert.deepEqual(actual, expected)
  })
})
