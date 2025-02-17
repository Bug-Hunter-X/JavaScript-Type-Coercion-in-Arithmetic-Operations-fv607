# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug related to type coercion during arithmetic operations.  JavaScript's loose typing can lead to unexpected results when different data types are involved in calculations.  The `bug.js` file shows an example of this, where a number is added to a string, resulting in string concatenation instead of numerical addition. The solution in `bugSolution.js` shows how to avoid this error using explicit type checking or conversion.

## How to Reproduce

1. Clone the repository.
2. Run `node bug.js`.
3. Observe the unexpected output (12).

## Solution

The `bugSolution.js` file provides a corrected version using explicit type checking.