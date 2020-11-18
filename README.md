# String List Parser for JavaScript

Automatically converts a `STRING` containing a list of values into a selected data type. Lists can be converted into either an `ARRAY` or `OBJECT` type.

A list selected to be converted into an `OBJECT` will use it's index value as the key.

Input:
```
const fruits = "Apple, Banana, Cherry"

// or

const fruits = `
  Apple
  Banana
  Cherry
`
```

Output:
```
parseList(fruits);
// returns > ["Apple", "Banana", "Cherry"];

parseList(fruits, "obj");
// returns > { 0: "Apple", 1: "Banana", 2: "Cherry" };
```