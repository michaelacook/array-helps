const fs = require("fs")
const path = require("path")

//medium.com/swlh/how-to-setting-up-unit-tests-with-typescript-871c0f4f1609

// programmatically require and run tests
https: describe("_", () => {
  fs.readdirSync(__dirname + "/lib").forEach((file) => {
    require(path.resolve(__dirname, "lib", file))()
  })
})
