import { _ } from "../../src/index"
import { assert } from "chai"

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
