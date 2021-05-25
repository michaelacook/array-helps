import { _ } from "../../src/index"
import { assert } from "chai"

describe(".head", () => {
  it("returns the first element of the passed array", () => {
    const input = [1, 2, 3]
    const expectedIndex = 0
    const firstElement = _.head(input)
    const firstElIndex = input.indexOf(firstElement)
    assert.deepEqual(firstElIndex, expectedIndex)
  })

  it("returns undefined if passed an empty array", () => {
    assert.isUndefined(_.head([]))
  })

  it("returns undefined if passed an empty array with a non-zero length", () => {
    const input = new Array(1)
    assert.isUndefined(_.head(input))
  })
})
