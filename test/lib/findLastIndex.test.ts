import { _ } from "../../src/index"
import { assert } from "chai"

describe(".findLastIndex", () => {
  it("returns an number", () => {
    assert.isNumber(_.findLastIndex([], () => {}))
  })

  it("returns the index for the last element predicate is truthy for", () => {
    const input = [false, true, false, false]
    const expected = 1
    const predicate = (el) => el
    const actual = _.findLastIndex(input, predicate)
    assert.deepEqual(actual, expected)
  })

  it("throws a ReferenceError if arr parameter is empty", () => {
    assert.throw(() => {
      _.findLastIndex(undefined, () => {})
    })
  })

  it("starts at the supplied number for start", () => {
    const input = [false, true, false, false, true]
    const start = 3
    const expected = 1
    const predicate = (el) => el
    const actual = _.findLastIndex(input, predicate, start)
    assert.deepEqual(actual, expected)
  })
})
