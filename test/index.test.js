const fs = require("fs")
const path = require("path")

// programmatically require and run tests
describe("_", () => {
  fs.readdirSync(__dirname + "/lib").forEach((file) => {
    require(path.resolve(__dirname, "lib", file))()
  })
})
