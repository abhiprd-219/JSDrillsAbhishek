const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };



function keys(obj) {
    const result = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(key);
      }
    }
    return result;
  }
  
  // Test cases for `keys`
 
  console.log(keys(testObject)); // Expected: ["name", "age", "location"]
  
  console.log(keys({ a: 1, b: 2 })); // Expected: ["a", "b"]
  
  console.log(keys({})); // Expected: []


  function values(obj) {
    const result = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
        result.push(obj[key]);
      }
    }
    return result;
  }
  
  // Test cases for `values`
  console.log(values(testObject)); // Expected: ["Bruce Wayne", 36, "Gotham"]
  
  console.log(values({ a: 10, b: 20, c: 30 })); // Expected: [10, 20, 30]
  
  console.log(values({})); // Expected: []

  

  function mapObject(obj, cb) {
    const result = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = cb(obj[key], key);
      }
    }
    return result;
  }
  
  // Test cases for `mapObject`
  console.log(mapObject(testObject, value => typeof value === 'number' ? value * 2 : value));
  // Expected: { name: "Bruce Wayne", age: 72, location: "Gotham" }
  
  console.log(mapObject({ a: 1, b: 2 }, value => value * 3)); // Expected: { a: 3, b: 6 }
  
  console.log(mapObject({ a: "apple", b: "banana" }, value => value.toUpperCase()));
  // Expected: { a: "APPLE", b: "BANANA" }

  



  function pairs(obj) {
    const result = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push([key, obj[key]]);
      }
    }
    return result;
  }
  
  // Test cases for `pairs`
  console.log(pairs(testObject)); // Expected: [["name", "Bruce Wayne"], ["age", 36], ["location", "Gotham"]]
  
  console.log(pairs({ a: 1, b: 2 })); // Expected: [["a", 1], ["b", 2]]
  
  console.log(pairs({})); // Expected: []

  


  function invert(obj) {
    const result = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[obj[key]] = key;
      }
    }
    return result;
  }
  
  // Test cases for `invert`
  console.log(invert({ a: "x", b: "y" })); // Expected: { x: "a", y: "b" }
  
  console.log(invert({ name: "Bruce", location: "Gotham" })); // Expected: { Bruce: "name", Gotham: "location" }
  
  console.log(invert({ a: 1, b: 2, c: 3 })); // Expected: { "1": "a", "2": "b", "3": "c" }

  

  function defaults(obj, defaultProps) {
    for (let key in defaultProps) {
      if (defaultProps.hasOwnProperty(key) && obj[key] === undefined) {
        obj[key] = defaultProps[key];
      }
    }
    return obj;
  }
  
  // Test cases for `defaults`
  console.log(defaults({ a: 1 }, { a: 10, b: 20 })); // Expected: { a: 1, b: 20 }
  
  console.log(defaults({}, { a: "x", b: "y" })); // Expected: { a: "x", b: "y" }
  
  console.log(defaults({ name: "Bruce" }, { name: "Clark", location: "Metropolis" }));
  // Expected: { name: "Bruce", location: "Metropolis" }
  

  
