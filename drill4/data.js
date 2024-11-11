const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

function each(elements, cb) {

    for (let i = 0; i < elements.length; i++) {
      cb(elements[i], i);
    }
  
  
}


each(items, (item, index) => console.log(`Item: ${item}, Index: ${index}`));
// Expected output:
// Item: 1, Index: 0
// Item: 2, Index: 1
// Item: 3, Index: 2
// Item: 4, Index: 3
// Item: 5, Index: 4
// Item: 5, Index: 5

// Test Case 1
let sum = 0;
each(items, item => sum += item);
console.log(sum); // Expected: 20

// Test Case 2
const double = [];
each(items, item => double.push(item * 2));
console.log(double); // Expected: [2, 4, 6, 8, 10, 10]

// Test Case 3
let product = 1;
each(items, item => product *= item);
console.log(product); // Expected: 600





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
console.log(map(items, item => item.toString())); // Expected: ["1", "2", "3", "4", "5", "5"]

// Test Case 3
console.log(map(items, (item, index) => item + index)); // Expected: [1, 3, 5, 7, 9, 10]

  

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
console.log(reduce(items, (acc, item) => acc * item, 1)); // Expected: 600

// Test Case 3 (without initial value)
console.log(reduce(items, (acc, item) => acc - item)); // Expected: -18 (since it calculates (((((1 - 2) - 3) - 4) - 5) - 5))



  
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
console.log(find(items, item => item === 5)); // Expected: 5 (first occurrence of 5)

// Test Case 3
console.log(find(items, item => item === 10)); // Expected: undefined (10 is not in items)

  
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
console.log(filter(items, item => item % 2 === 0)); // Expected: [2, 4] (even numbers)

// Test Case 3
console.log(filter(items, item => item === 5)); // Expected: [5, 5] (all occurrences of 5)

  

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

  
