const  arrayOfObjects= require('./data');

 //    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

 function getAllEmails(data) {
    const emails = [];
    for (const person of data) { 
      emails.push(person.email); 
    }
    return emails;
  }
  
  const allEmails = getAllEmails(arrayOfObjects);
  console.log(allEmails);


  //  Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
  
  function printHobbiesByAge(data, targetAge) {
    for (const person of data) {
      if (person.age === targetAge) {
        console.log(`${person.name}'s hobbies: ${person.hobbies.join(', ')}`);
      }
    }
  }
  
  const targetAge = 30;
  printHobbiesByAge(arrayOfObjects, targetAge);


  // Students in Australia
  function printAustralianStudents(data) {
    for (const person of data) {
      if (person.isStudent && person.country === 'Australia') {
        console.log(person.name);
      }
    }
  }
  
  printAustralianStudents(arrayOfObjects);
  
  
  //Name and city of individual at index 3
  function printInfoAtIndex3(data) {
      const person = data[3];
      console.log(`${person.name} lives in ${person.city}`);
    }
  
    printInfoAtIndex3(arrayOfObjects);
  
  
    //  Ages of all individuals
  function printAllAges(data) {
    for (const person of data) {
      console.log(person.age);
    }
  }
  
  printAllAges(arrayOfObjects);
  
  //  First hobby of each individual
  function printFirstHobby(data) {
    for (const person of data) {
      console.log(`${person.name}'s first hobby: ${person.hobbies[0]}`);
    }
  }
  
  printFirstHobby(arrayOfObjects);
  
  //  Names and emails of 25-year-olds
  function print25YearOlds(data) {
    for (const person of data) {
      if (person.age === 25) {
        console.log(`${person.name}: ${person.email}`);
      }
    }
  }
  
  print25YearOlds(arrayOfObjects);
  
  //  City and country of each individual
  function printCityAndCountry(data) {
    for (const person of data) {
      console.log(`${person.city}, ${person.country}`);
    }
  }
  
  printCityAndCountry(arrayOfObjects);