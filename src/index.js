const InvalidArgumentError = require("./error.js")

const _ = {
  /**
   * Take an array and divide into a 2D array of chunks of the specified size
   * If there is any remainder, it will be at the end of the array
   * @param {Object|Array} arr - input array to chunk
   * @param {Number} size - chunk size
   * @returns {Object|Array} output
   */
  chunk(arr, size) {
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    const output = []
    while (arr.length > 0) {
      output.push(arr.splice(0, size))
    }
    return output
  },

  /**
   * Remove all falsey values from an array
   * Removes 0, null, false, undefined, "", NaN
   * @param {Object|Array} arr - input array
   * @returns {Object|array}
   */
  compact(arr) {
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    return arr.filter((el) => {
      if (el) {
        return el
      }
    })
  },

  /**
   * Concatenate a given array and any number of additional elements onto a new array
   * @param {Object|Array} arr
   * @param  {...any} args
   * @returns {Object|Array} output - new array
   */
  concat(arr, ...args) {
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    const output = [...arr]
    args.forEach((arg) => {
      if (Array.isArray(arg)) {
        arg.forEach((el) => {
          output.push(el)
        })
      } else {
        output.push(arg)
      }
    })
    return output
  },
}

module.exports = _
