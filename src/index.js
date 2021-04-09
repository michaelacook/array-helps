const {
  InvalidArgumentError,
  MissingRequiredArgumentError,
} = require("./error.js")

// add Array.isArray polyfill if node version doesn't support it natively
if (!Array.isArray) {
  require("./isArrayPolyfill.js")()
}

const _ = {
  /**
   * Take an array and divide into a 2D array of chunks of the specified size
   * If there is any remainder, it will be at the end of the array
   * @param {Object|Array} arr - input array to chunk
   * @param {Number} size - chunk size
   * @returns {Object|Array} output
   */
  chunk(arr, size = 1) {
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

  /**
   * Creates an array of array values not included in any array passed
   * Non-array types passed for ...arrays are ignored
   * @param {Object|Array} arr
   * @param  {...any} arrays
   * @returns {Object|Array} output
   */
  difference(arr, ...arrays) {
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    const filtered = arrays.filter(Array.isArray).flat()
    return arr.filter((el) => (filtered.includes(el) ? false : true))
  },

  /**
   * Creates an array of array values not included in the other arrays passed as determined by an iteratee callback
   * Similar to difference but uses an iteratee to determine comparison
   * @param {Object|Array} arr
   * @param {Function} iteratee
   * @param  {...any} arrays
   * @returns {Object|Array}
   */
  differenceBy(arr, iteratee, ...arrays) {
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    if (!arr.length) {
      return arr
    }
    if (!iteratee) {
      return this.difference(arr, ...arrays)
    }
    const filtered = arrays.filter(Array.isArray).flat().map(iteratee)
    return arr.filter((el) => (filtered.includes(iteratee(el)) ? false : true))
  },

  /**
   * Creates a new array representing the difference between two or more arrays based on a comparson callback
   * Like _.difference and differenceBy but accepts a function to compare each item in the first array against ...arrays
   * if comparator callback returns true, the first array item is filtered
   * @param {Object|Array} arr
   * @param {Function} comparator - used to compare items in each array
   * @param  {...any} arrays
   * @returns {Object|Array}
   */
  differenceWith(arr, comparator, ...arrays) {
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    let filtered = arrays.filter(Array.isArray).flat()
    if (!comparator) {
      return this.difference(arr, ...arrays)
    }
    const compare = (el) => {
      for (let item of filtered) {
        if (comparator(el, item)) {
          return true
        }
      }
      return false
    }
    return arr.filter((el) => (!compare(el) ? true : false))
  },

  /**
   * Drop a specified number of elements from an array starting from index 0
   * Simple wrapper for Array.slice
   * @param {Object|Array} arr - array to drop element(s) from
   * @param {Number} num defaults to 1 - number of elements to drop
   * @returns {Object|Array}
   */
  drop(arr, num = 1) {
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    return arr.slice(num)
  },

  /**
   * Drop a specified number of elements from the end of an array
   * Like .drop but drops elements from the end rather than the start
   * @param {Object|Array} arr - array to drop element(s) from
   * @param {Number} num
   * @returns {Object|Array}
   */
  dropRight(arr, num) {
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    const sliceNum = -1 * num
    const sliced = arr.slice(sliceNum)
    return arr.filter((el) => !sliced.includes(el))
  },

  /**
   * Drop elements from the end of an array until a predicate callback returns false
   * Returns a new array
   * @param {Object|Array} arr - array from which to drop elements
   * @param {Function} predicate - takes current element of array and returns a truthy or falsey value
   * @returns {Object|Array}
   */
  dropRightWhile(arr, predicate) {
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    if (!predicate) {
      throw MissingRequiredArgumentError
    }
    const copy = [...arr]
    while (predicate(copy[copy.length - 1])) {
      copy.pop()
    }
    return copy
  },

  /**
   * Drops elements from the start of the array until predicate returns falsey
   * Returns a new array
   * @param {Object|Array} arr - array from which to drop elements
   * @param {Function} predicate - takes current element of array and returns a truthy or falsey value
   * @returns {Object|Array}
   */
  dropWhile(arr, predicate) {
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    if (!predicate) {
      throw MissingRequiredArgumentError
    }
    const copy = [...arr]
    while (predicate(copy[0])) {
      copy.shift()
    }
    return copy
  },

  /**
   * Fill an array with a given value from a specified start to finish
   * If start is omitted, defaults to 0
   * If end is omitted, defaults to arr.length
   * @param {Object|Array} arr
   * @param {any} value
   * @param {Number} start
   * @param {Number} end
   * @returns {Object|Array}
   */
  fill(arr, value, start = 0, end = arr.length) {
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    if (value === undefined) {
      throw MissingRequiredArgumentError
    }
    const copy = [...arr]
    for (let i = start; i < end; i++) {
      copy[i] = value
    }
    return copy
  },

  /**
   * Return the index of the first element of a given array that predicate turns truthy for
   * @param {Object|Array} arr
   * @param {Function} predicate - used to evaluate each item in arr
   * @param {Number} start - starting index. Defaults to 0
   * @returns {Number} index
   */
  findIndex(arr, predicate, start = 0) {
    if (arr === undefined) {
      throw MissingRequiredArgumentError
    }
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    for (let i = start; i < arr.length; i++) {
      const el = arr[i]
      if (predicate(el)) {
        return i
      }
    }
    return -1
  },

  /**
   * Find the last index in an array that a callback returns truthy for
   * Like findIndex but iterates from right to left
   * @param {Object|Array}} arr
   * @param {Function} predicate - used to evaluate each item in arr
   * @param {Number} start - starting index. Defaults to last index in arr
   * @returns {Number}
   */
  findLastIndex(arr, predicate, start = arr.length - 1) {
    if (arr === undefined) {
      throw MissingRequiredArgumentError
    }
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    for (let i = start; i > -1; i--) {
      const el = arr[i]
      if (predicate(el)) {
        return i
      }
    }
    return -1
  },

  /**
   * Returns the first element of an array
   * Will return undefined when passed an empty array
   * @param {Object|Array} arr
   * @returns {any}
   */
  head(arr) {
    if (arr === undefined) {
      throw MissingRequiredArgumentError
    }
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    return arr[0]
  },

  /**
   * Flatten a multi-dimensional array by a single level
   * @param {Object|Array} arr - input array to be flattened
   * @returns {Object|Array}
   */
  flatten(arr) {
    if (arr === undefined) {
      throw MissingRequiredArgumentError
    }
    if (!Array.isArray(arr)) {
      throw InvalidArgumentError
    }
    const output = []
    while (arr.length) {
      const el = arr.shift()
      if (Array.isArray(el)) {
        output.push(...el)
      } else {
        output.push(el)
      }
    }
    return output
  },
}

module.exports = _
