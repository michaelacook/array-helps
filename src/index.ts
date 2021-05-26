export const _ = {
  /**
   * Take an array and divide into a 2D array of chunks of the specified size
   * If there is any remainder, it will be at the end of the array
   * @param {Object|Array} arr - input array to chunk
   * @param {Number} size - chunk size
   * @returns {Object|Array} output
   */
  chunk(arr: any[], size: number = 1) {
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
  compact(arr: any[]) {
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
  concat(arr: any[], ...args: any[]) {
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
  difference(arr: any[], ...arrays: any[][]) {
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
  differenceBy(arr, iteratee, ...arrays: any[][]) {
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
  differenceWith(arr: any[], comparator, ...arrays: any[][]) {
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
  drop(arr: any[], num: number = 1) {
    return arr.slice(num)
  },

  /**
   * Drop a specified number of elements from the end of an array
   * Like .drop but drops elements from the end rather than the start
   * @param {Object|Array} arr - array to drop element(s) from
   * @param {Number} num
   * @returns {Object|Array}
   */
  dropRight(arr: any[], num: number = 1) {
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
  dropRightWhile(arr: any[], predicate) {
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
  dropWhile(arr: any[], predicate) {
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
  fill(arr: any[], value, start: number = 0, end: number = arr.length) {
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
  findIndex(arr: any[], predicate, start: number = 0) {
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
  findLastIndex(arr: any[], predicate, start: number = arr.length - 1) {
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
  head(arr: any[]) {
    return arr[0]
  },

  /**
   * Flatten a multi-dimensional array by a single level
   * @param {Object|Array} arr - input array to be flattened
   * @returns {Object|Array}
   */
  flatten(arr: any[]) {
    return arr.reduce((acc, curr) => acc.concat(curr), [])
  },

  /**
   * Flattens a multi-dimensional array to a single dimension
   * Flattens any level of nesting
   * JavaScript natively provides a very concise way to achieve
   * Using Array.prototype.flat passing the bigint Infinity
   * This method is a simple wrapper for JavaScript's native way to do this
   * @param {Object|Array} arr
   * @returns {Object|Array}
   */
  flattenDeep(arr: any[]) {
    return arr.flat(Infinity)
  },

  /**
   * Recursively flatten an array n levels deep
   * @param {Object|Array} arr
   * @param {Number} n - number of levels of depth to flatten. Defaults to 1
   * @returns {Object|Array}
   */
  flattenDepth(arr: any[], n: number = 1) {
    while (n > 0) {
      return this.flattenDepth(this.flatten(arr), n - 1)
    }
    return arr
  },

  /**
   * Convert a list of values composed of an array of arrays to an object
   * JavaScript natively provides this capability with Object.entries
   * So this method is a simple wrapper for that native capability
   * @param {Object|Array} arr
   * @returns {Object}
   */
  fromPairs(arr: any[]) {
    return Object.fromEntries(arr)
  },

  /**
   * Find the index for the first occurrence of an element in an array
   * If start is negative, it is used as an offset from the end of the array
   * @param {Object|Array} arr
   * @param {Any} value
   * @param {Number} start - index from which to start iterating. Defaults to 0
   * @returns {Number} index on success, otherwise -1
   */
  indexOf(arr: any[], value, start: number = 0) {
    if (start < 0) {
      start = arr.length + start
    }
    for (let i = start; i < arr.length; i++) {
      if (value === arr[i]) {
        return i
      }
    }
    return -1
  },

  /**
   * Returns a new array with all but the last element of arr
   * Safe for nested arrays as it creates a deep clone of the original
   * @param {Object|Array} arr
   * @returns {Object|Array}
   */
  initial(arr: any[]) {
    const copy = this._deepClone(arr)
    copy.pop()
    return copy
  },

  /**
   * Get the intersection of two or more arrays
   * The intersection of two or more arrays is the array that results
   * from all their common elements
   * @param {Object|Array} arr
   * @param  {...any} arrays
   * @returns {Object|Array}
   */
  intersection(arr: any[], ...arrays: any[]) {
    return arr.filter((el) => {
      let intersects = true
      for (let array of arrays) {
        if (Array.isArray(array)) {
          if (!array.includes(el)) {
            intersects = false
            break
          }
        }
      }
      return intersects
    })
  },

  /**
   * Get the intersection of two or more arrays as compared by an iteratee
   * like intersection but each element in each array is compared with criteria set by iteratee
   * @param {Object|Array} arr
   * @param {Function} iteratee - function to compare elements in each array. Accepts a single argument
   * @param  {...any} arrays
   * @returns {Object|Array}
   */
  intersectionBy(arr: any[], iteratee?: any, ...arrays: any[]) {
    return iteratee
      ? arr.filter((el) => {
          let intersects = true
          for (let array of arrays) {
            if (Array.isArray(array)) {
              if (!array.map(iteratee).includes(iteratee(el))) {
                intersects = false
                break
              }
            }
          }
          return intersects
        })
      : this.intersection(arr, arrays)
  },

  /**
   * Private method
   * Utility method to deep clone objects and arrays
   * @param {Object} obj - object or array
   * @returns {Object} deep clone
   */
  _deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
  },
}
