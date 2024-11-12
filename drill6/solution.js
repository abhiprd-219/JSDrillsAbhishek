function counterFactory() {
  let counter = 0; // Private counter variable in closure

  return {
      increment: function() {
          return ++counter; // Increments and returns counter
      },
      decrement: function() {
          return --counter; // Decrements and returns counter
      }
  };
}

const counter = counterFactory();

console.log(counter.increment()); // Expected output: 1
console.log(counter.increment()); // Expected output: 2
console.log(counter.decrement()); // Expected output: 1




function limitFunctionCallCount(cb, n) {
  let callCount = 0; // Tracks number of times cb has been called

  return function(...args) {
      if (callCount < n) {
          callCount++; // Increment call count if limit not reached
          return cb(...args); // Invoke cb with arguments
      }
      return null; // Return null if call limit is reached
  };
}
const limitedFn = limitFunctionCallCount((x) => x * 2, 3);

console.log(limitedFn(2)); // Expected output: 4 (first call)
console.log(limitedFn(3)); // Expected output: 6 (second call)
console.log(limitedFn(4)); // Expected output: 8 (third call)
console.log(limitedFn(5)); // Expected output: null (limit reached)


function cacheFunction(cb) {
  const cache = {}; // Object to store cached results

  return function(...args) {
      const key = JSON.stringify(args); // Convert arguments to a string key
      if (cache.hasOwnProperty(key)) {
          return cache[key]; // Return cached result if it exists
      }
      const result = cb(...args); // Call cb and store result in cache
      cache[key] = result;
      return result;
  };
}


const cachedFn = cacheFunction((x) => x * 2);

console.log(cachedFn(2)); // Expected output: 4 (calculated and cached)
console.log(cachedFn(2)); // Expected output: 4 (retrieved from cache)
console.log(cachedFn(3)); // Expected output: 6 (calculated and cached)
console.log(cachedFn(3)); // Expected output: 6 (retrieved from cache)



