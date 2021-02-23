//Declare studentList Array
const studentList = [{
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
// TO DO - Write higher order functions / There are many solutions
//Declare cLastNameResults. Use functions and map a new array of objects
//Output


//const filter = (studentList, func) => studentList.filter(func);

const cLastNameResults = studentList.filter(student => student.lastName.startsWith("C") && student.firstName.startsWith("C"))
    .map(student => {
        return {
            firstName: student.firstName,
            lastName: student.lastName,
            minScore: student.scores.reduce((min, score) => Math.min(min, score), 101),
            maxScore: student.scores.reduce((max, score) => Math.max(max, score), -1),
            avgScore: student.scores.reduce((tot, score) => tot + score, 0) / student.scores.length
        };
    });
console.log(cLastNameResults);