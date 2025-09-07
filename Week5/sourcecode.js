
const studentScores = [
    {name: 'Alice', score: 85},
    {name: 'Bob', score: 92},
    {name: 'Charlie', score: 68},
    {name: 'David', score: 55},
    {name: 'Eve', score: 78}
];
 
function getPassingNames(students) {
    return students
        .filter(student => student.score >= 70)
        .map(student => student.name.toUpperCase());
}
 
const passingNames =
getPassingNames(studentScores);
console.log(passingNames);
 
// Output should be: ["ALICE", "BOB", "EVE"]


const array = [1, 30, 4, 21, 100000];
array.sort((a, b) => b - a).reverse
console.log(array);       
// Output [ 100000, 30, 21, 4, 1 ]
 
 
const students = [
    { id: 66500102, name: "Suda", gpa: 2.5},
    { id: 66500555, name: "ada", gpa: 2.8},
    { id: 66500589, name: "pornchai", gpa: 3.25},
    { id: 66500103, name: "Pornsak", gpa: 3.8},
];

students.sort(function(a, b) {
    return a.name.localeCompare(b.name);      //locale คือเรียงลำดับตามภาษา  default = en
});
console.log(students);


 
//sourcecode.js
import getLength, { echo, GPAAverage, BookManegement } from "./libs/utilities.js"
// const { echo, getLength, GPA, Book } = require("./libs/utilities.js")
console.log(echo("Today is a present"))
console.log(getLength("JS Beginner"))
console.log(GPAAverage)
const b1 = new BookManegement(1234)
console.log(b1)