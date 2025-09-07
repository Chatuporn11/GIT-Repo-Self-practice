
const words = ["apple", "Mango", "orange", "Banana"]
const startAWords = [];
words.forEach(word => {
    if(word.startsWith('a')) {
        startAWords.push(word);
    }
});
console.log(startAWords);


const employee = [{
    id: 'e100',
    firstname: 'Somsri',
    lastname: 'Deejai',
},
{
    id: 'e1001',
    firstname: 'Suda',
    lastname: 'Jaidee',
},
{
    id: 'e1001',
    firstname: 'Somchai',
    lastname: 'Happy',
},
]

let upperName = employee.map((e) => e.firstname.toUpperCase() + " " + e.lastname.toUpperCase());
console.log(upperName);
//output [ 'SOMSRI DEEJAI', 'SUDA JAIDEE', 'SOMCHAI HAPPY' ]

const famenull = employee.filter((name) => name.lastname.toLowerCase().includes("jai"))
    .map((name) => (name.firstname + " " + name.lastname).toUpperCase())
console.log(famenull)
//output2 [ 'SOMSRI DEEJAI', 'SUDA JAIDEE' ]


const carts = [
    { productId: 1102, price: 20, amount: 4 },
    { productId: 2043, price: 5, amount: 1 },
    { productId: 3021, price: 10, amount: 3 },
];

let total = carts.reduce((sum, item) => sum + item.price, 0);
let netPrice = total * 1.07;

console.log('Total:', total);
console.log('TotalwithVAT:', netPrice);


const nums = [2, 4, 6]
// nums[nums.length] = 8
console.log(nums.push(8)) //append in the end of array, return new length
console.log(nums)
nums.unshift(10)          //add in the beginning of array
console.log(nums)
nums.pop()                //remove in the end of array
console.log(nums)
nums.shift()              //remove in the beginning of array
console.log(nums)


let fruits = ['apple', 'orange', 'mango'];
//add cherry,berry  after orange
fruits.splice(2, 0, 'cherry', 'berry')
console.log(fruits);     //  ['apple', 'orange', 'cherry', 'berry', 'mango']
//delete 'cherry'
fruits.splice(2,1)
console.log(fruits);     //  [ 'apple', 'orange', 'berry', 'mango' ]
//replace 'berry' with 'lychee'
fruits.splice(2, 1, 'lychee')
console.log(fruits);     //  [ 'apple', 'orange', 'lychee', 'mango' ]

let animals = ['ant', 'lion', 'cat', 'monkey', 'goose'];
animals.slice(1)
console.log(animals.slice(1));        // [ 'lion', 'cat', 'monkey', 'goose', 'tiger' ]
console.log(animals.slice(0, 3));     // [ 'ant', 'lion', 'cat' ]
console.log(animals.slice(2));        // [ 'cat', 'monkey', 'goose' ]
console.log(animals.slice(2, 5));     // [ 'cat', 'monkey', 'goose' ]
console.log(animals.slice(-3));       // [ 'cat', 'monkey', 'goose' ]

let beNull = ['apply', 'spent', 'bought', 'rents'];

beNull.fill(undefined, 1, 3);
console.log(beNull);
beNull.fill(null, 1);                 // [ 'apply', undefined, undefined, 'rents' ]
console.log(beNull);                  // [ 'apply', null, null, null ]
