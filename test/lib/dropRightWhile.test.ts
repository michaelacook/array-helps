import { _ } from "../../src/index"
import { assert } from "chai"

describe(".dropRightWhile", () => {
  it("returns an array", () => {
    assert.isArray(_.dropRightWhile([], () => {}))
  })

  it("drops elements from the end of an array until predicate returns false", () => {
    const inputArr = [1, 2, 3, 4, 5]
    const predicate = (el) => el > 2
    const expected = [1, 2]
    const actual = _.dropRightWhile(inputArr, predicate)
    assert.deepEqual(actual, expected)
  })

  it("drops objects from an array until a given property is falsey", () => {
    // this was taken from the Lodash docs and modified
    const inputArr = [
      { user: "barney", active: false },
      { user: "fred", active: true },
      { user: "pebbles", active: true },
    ]
    const predicate = (el) => el.active
    const expected = [{ user: "barney", active: false }]
    const actual = _.dropRightWhile(inputArr, predicate)
    assert.deepEqual(actual, expected)
  })

  it("returns an empty array when passed an empty array", () => {
    const inputArr = []
    const expected = []
    const actual = _.dropRightWhile(inputArr, () => {})
    assert.deepEqual(actual, expected)
  })
})
