const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

function find(elements, cb) {
    for (let i = 0; i < elements.length; i++) {
      if (cb(elements[i], i)) {
        return elements[i];
      }
    }
    return undefined;
  }

  // Test Case 1
console.log(find(items, item => item > 3)); // Expected: 4 (first item greater than 3)

// Test Case 2
console.log(find(items, item => item === 5)); // 5 (first occurrence of 5)

// Test Case 3
console.log(find(items, item => item === 10)); //  undefined (10 is not in items)

  