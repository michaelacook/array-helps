// To enforce a basic function type that accepts and returns any type
// To ensure callbacks are at minimum a function
export type Callback = (el: any) => any

// Define a Comparator type that enforces a function that takes two arguments and returns a boolean
// To enforce callbacks that compare two values
export type Comparator = (a: any, b: any) => boolean
