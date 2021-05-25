import { _ } from "../../src/index"
import { assert } from "chai"

describe(".difference", () => {
  it("returns an array", () => {
    assert.isArray(_.difference([]))
  })

  it("returns an array of filtered values that are not contained by passed arrays", () => {
    const inputArray = [1, 2, 3]
    const expected = [1]
    const actual = _.difference(inputArray, [2], [3])
    assert.deepEqual(actual, expected)
  })
})
