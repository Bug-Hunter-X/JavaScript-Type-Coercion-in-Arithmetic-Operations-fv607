function add(a, b) {
  // Type checking and conversion
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error('Invalid input: Both arguments must be numbers.');
    return NaN;
  }
}

console.log(add(1, 2)); // Output: 3
console.log(add(1, '2')); // Output: Invalid input: Both arguments must be numbers.
NaN