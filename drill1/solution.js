
const arrayOfObjects = [
  { 
     id: 1, 
     name: 'Alice', 
     age: 30,
     email: 'alice@example.com',
     city: 'New York',
     country: 'USA',
     hobbies: ['reading', 'painting'],
     isStudent: false
  },
  { 
     id: 2, 
     name: 'Bob', 
     age: 25,
     email: 'bob@example.com',
     city: 'London',
     country: 'UK',
     hobbies: ['playing guitar', 'hiking'],
     isStudent: true
  },
  { 
     id: 3, 
     name: 'Charlie', 
     age: 35,
     email: 'charlie@example.com',
     city: 'Paris',
     country: 'France',
     hobbies: ['cooking', 'gardening'],
     isStudent: false
  },
  { 
     id: 4, 
     name: 'David', 
     age: 28,
     email: 'david@example.com',
     city: 'Berlin',
     country: 'Germany',
     hobbies: ['photography', 'traveling'],
     isStudent: true
  },
  { 
     id: 5, 
     name: 'Eve', 
     age: 32,
     email: 'eve@example.com',
     city: 'Sydney',
     country: 'Australia',
     hobbies: ['yoga', 'surfing'],
     isStudent: false
  },
  { 
     id: 6, 
     name: 'Frank', 
     age: 33,
     email: 'frank@example.com',
     city: 'Los Angeles',
     country: 'USA',
     hobbies: ['playing basketball', 'reading'],
     isStudent: true
  },
  { 
     id: 7, 
     name: 'Grace', 
     age: 29,
     email: 'grace@example.com',
     city: 'Toronto',
     country: 'Canada',
     hobbies: ['painting', 'running'],
     isStudent: false
  },
  { 
     id: 8, 
     name: 'Hannah', 
     age: 31,
     email: 'hannah@example.com',
     city: 'Melbourne',
     country: 'Australia',
     hobbies: ['writing', 'knitting'],
     isStudent: true
  },
  { 
     id: 9, 
     name: 'Ivy', 
     age: 27,
     email: 'ivy@example.com',
     city: 'Tokyo',
     country: 'Japan',
     hobbies: ['playing piano', 'cooking'],
     isStudent: false
  },
  { 
     id: 10, 
     name: 'Jack', 
     age: 34,
     email: 'jack@example.com',
     city: 'Mumbai',
     country: 'India',
     hobbies: ['playing cricket', 'watching movies'],
     isStudent: true
  }
];




 
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