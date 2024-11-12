const inventory = require('./data');
  // ==== Problem #1 ====
  // The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
  "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
  
  function findCarById(id) {
      const car = inventory.find(function(car) {
          return car.id === id;
      });
      if (car) {
          console.log(`Car ${id} is a ${car.car_year} ${car.car_make} ${car.car_model}.`);
      } else {
          console.log(`Car with id ${id} not found.`);
      }
  }
  
 findCarById(33);
 findCarById();
 findCarById(15);


  // Console output is :- Car 33 is a 2011 Jeep Wrangler.
  
  //Find last car details:-
  function findLastCar() {
    const lastCar = inventory[inventory.length - 1];
    console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);
  }
  findLastCar();
  findLastCar(12);

  
  
  // ==== Problem #3 ====
  // The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
  
  
  function sortCarModelsAlphabetically(inventory) {
    const carModels = [];
    
    for (let i = 0; i < inventory.length; i++) {
        carModels.push(inventory[i].car_model);
    }
    
    carModels.sort();
    console.log(carModels);
    
    return carModels;
  }
  
  // Execute the function
  sortCarModelsAlphabetically(inventory);
  sortCarModelsAlphabetically();


  
  // ==== Problem #4 ====
  // The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
  
  function getCarYears(inventory) {
    const carYears = [];
    
    for (let i = 0; i < inventory.length; i++) {
        carYears.push(inventory[i].car_year);
    }
        console.log(carYears);
    
    return carYears;
  }
  
  // Execute the function
  getCarYears(inventory);
  getCarYears();


  
  // ==== Problem #5 ====
  // The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
  
  function carsOlderThan2000(){
    var count = 0;
    const carModelsBefore2000 = [];
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].car_year<2000) {
            count++;
            carModelsBefore2000.push(inventory[i].car_model);
        }
  
    }
    return carModelsBefore2000;
    return count;
  
  }
  console.log(carsOlderThan2000());
  carsOlderThan2000();


  // ==== Problem #6 ====
  // A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
  function audiAndBMWOnly(){
    var filterCars = [];
    for(let i = 0; i<inventory.length; i++){
        if(inventory[i].car_make === 'Audi' || inventory[i].car_make === 'BMW'){
            filterCars.push(inventory[i]);
        }
    }
  
    return filterCars;
  }
  
  var filtersCar = audiAndBMWOnly();
 console.log(JSON.stringify(filtersCar));
  