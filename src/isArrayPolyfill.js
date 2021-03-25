// to be used in case the version of node the client runs does not support Array.isArray

module.exports = () => {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]"
  }
}
