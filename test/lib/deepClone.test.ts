import { _ } from "../../src/index"
import { assert } from "chai"

describe(".deepClone", () => {
  it("clones a deeply nested object", () => {
    const deepObj = {
      a: {
        b: {
          c: {
            e: {
              f: {
                g: {
                  h: "last nest",
                },
              },
            },
          },
        },
      },
    }

    const cloned = _._deepClone(deepObj)
    assert.deepEqual(cloned, deepObj)
  })

  it("clones a deeply nested array", () => {
    const deepArray = [
      "a",
      ["b", ["c", ["d", ["e", ["f", ["g", ["h", ["last nest"]]]]]]]],
    ]

    const cloned = _._deepClone(deepArray)
    assert.deepEqual(cloned, deepArray)
  })
})
