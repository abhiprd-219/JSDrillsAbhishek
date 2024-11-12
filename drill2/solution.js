const users = require('./data');
const usersArray = Object.values(users);
console.log(usersArray);


//Q1 Find all users who are interested in playing video games.

const videoGameLovers = usersArray.filter(user => user.interests && user.interests.includes("Video Games"));
console.log(JSON.stringify(videoGameLovers));

//Q2 Find all users staying in Germany.

const germanyUsers = usersArray.filter( user => user.nationality === 'Germany');
for(let i=0;i<germanyUsers.length;i++){
    console.log(germanyUsers[i]);
}
//Q3 Find all users with masters Degree.

const mastersDegreeHolders = usersArray.filter(user => user.qualification.includes("Masters"));
console.log(JSON.stringify(mastersDegreeHolders));



//Q4 Group users based on their Programming language mentioned in their designation.

const usersByProgrammingLanguage = usersArray.reduce((acc, user) => {
    if (user.designation) {
        // Extract language if mentioned in the designation
        const languages = ["JavaScript", "Python", "Java", "C++", "Ruby", "PHP"]; // Add other languages as needed
        const userLanguages = languages.filter(lang => user.designation.includes(lang));
        
        userLanguages.forEach(lang => {
            if (!acc[lang]) {
                acc[lang] = [];
            }
            acc[lang].push(user);
        });
    }
    return acc;
}, {});

console.log(JSON.stringify(usersByProgrammingLanguage, null, 2));


