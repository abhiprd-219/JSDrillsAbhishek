const users = {
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: ["Chess, Reading Comics, Playing Video Games"],
        qualification: "Masters",
        nationality: "Greenland"
    },
    "Ron": {
        age: 19,
        desgination: "Intern - Golang",
        interests: ["Video Games"],
        qualification: "Bachelor",
        nationality: "UK"
    },
    "Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachaelor",
        nationality: "Germany"
    },
    "Rob": {
        age: 34,
        desgination: "Senior Javascript Developer",
        interest: ["Walking his dog, Cooking"],
        qualification: "Masters",
        nationality: "USA"
    },
    "Pike": {
        age: 23,
        desgination: "Python Developer",
        interests: ["Listing Songs, Watching Movies"],
        qualification: "Bachaelor's Degree",
        nationality: "Germany"
    }
}

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



