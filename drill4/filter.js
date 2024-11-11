const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

function filter(elements, cb) {
    const result = [];
    for (let i = 0; i < elements.length; i++) {
      if (cb(elements[i], i)) {
        result.push(elements[i]);
      }
    }
    return result;
  }
  // Test Case 1
console.log(filter(items, item => item > 3)); // Expected: [4, 5, 5] (all items greater than 3)

// Test Case 2
console.log(filter(items, item => item % 2 === 0)); // [2, 4] (even numbers)

// Test Case 3
console.log(filter(items, item => item === 5)); // [5, 5] (all occurrences of 5)
