const _ = {
  /**
   * Take an array and divide into a 2D array of chunks of the specified size
   * If there is any remainder, it will be at the end of the array
   * @param {Object|Array} arr - input array to chunk
   * @param {Number} size - chunk size
   * @returns {Object|Array} output
   */
  chunk(arr, size) {
    const output = []
    while (arr.length > 0) {
      output.push(arr.splice(0, size))
    }
    return output
  },

  /**
   * Remove all falsey values from an array
   * Removes 0, null, undefined, "", NaN
   * @param {Object|Array} arr - input array
   * @returns {Object|array}
   */
  compact(arr) {
    return arr.filter((el) => {
      if (el) {
        return el
      }
    })
  },
}

module.exports = _
