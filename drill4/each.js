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
console.log(double); // [2, 4, 6, 8, 10, 10]

// Test Case 3
let product = 1;
each(items, item => product *= item);
console.log(product); // 600

