const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

function flatten(elements) {
    let result = [];
    for (let i = 0; i < elements.length; i++) {
      if (Array.isArray(elements[i])) {
        result = result.concat(flatten(elements[i]));
      } else {
        result.push(elements[i]);
      }
    }
    return result;
  }

  // Test Case 1
console.log(flatten(nestedArray)); // Expected: [1, 2, 3, 4]

// Test Case 2
console.log(flatten([1, [2, [3, [4, [5]]]]])); // Expected: [1, 2, 3, 4, 5]

// Test Case 3
console.log(flatten([[1, 2], [3, [4, 5]]])); // Expected: [1, 2, 3, 4, 5]

  