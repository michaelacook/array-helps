# Array Helper

A clone of the popular [Lodash](https://lodash.com/) library's array methods.

I decided to write this project for a few reasons. First, I wanted to start getting familiar with unit testing using Mocha and Chai. Second, I wanted to challenge myself to complete a bunch of coding challenges, and this seemed like a great way to do it! Third, I wanted to get more familiar with Lodash.

## Installation and Usage

`npm install array-helper --save`

```js
const _ = require("array-helper")

const chunked = _.chunk([1, 2, 3, 4, 5, 6, 7], 2)

// [ [1, 2], [3, 4], [5, 6], [7] ]
```

## License

MIT
