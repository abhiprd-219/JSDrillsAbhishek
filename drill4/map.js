const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

function map(elements, cb) {
    const result = [];
    for (let i = 0; i < elements.length; i++) {
      result.push(cb(elements[i], i));
    }
    return result;
  }

  // Test Case 1
console.log(map(items, item => item * 2)); // Expected: [2, 4, 6, 8, 10, 10]

// Test Case 2
console.log(map(items, item => item.toString())); // ["1", "2", "3", "4", "5", "5"]

// Test Case 3
console.log(map(items, (item, index) => item + index)); // [1, 3, 5, 7, 9, 10]
