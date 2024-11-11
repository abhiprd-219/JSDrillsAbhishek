const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

function reduce(elements, cb, startingValue) {
    let accumulator = startingValue !== undefined ? startingValue : elements[0];
    let startIdx = startingValue !== undefined ? 0 : 1;
  
    for (let i = startIdx; i < elements.length; i++) {
      accumulator = cb(accumulator, elements[i]);
    }
    return accumulator;
  }

  // Test Case 1
console.log(reduce(items, (acc, item) => acc + item, 0)); // Expected: 20

// Test Case 2
console.log(reduce(items, (acc, item) => acc * item, 1)); //  600

// Test Case 3 (without initial value)
console.log(reduce(items, (acc, item) => acc - item)); // -18 (coz it calculates (((((1 - 2) - 3) - 4) - 5) - 5))
