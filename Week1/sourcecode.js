// B
//1. crate array with many data types
let arr = ["Kiss", "Love", 37] 
//2. print array size
console.log(arr.length);
//3. print the first item
console.log(arr[0]);
//4.  print the last item
console.log(arr[arr.length - 1]);
//5. add twn more items at the end of array with object
arr.push({age: 30}, "Bob");
console.log(arr);
//6. print every item in array
for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
}
//7. shrink array with any operations
arr.pop()
console.log(arr.length);
//8. apply spread on string variable
let str = "My freind";
const strch=[...str]
console.log(strch);

//9. create array with new constructor
const arr1=new Array()
console.log(arr1)
const arr2=new Array(5)
console.log(arr2)
const arr3=new Array(1, 'Koko', true)
console.log(arr3)

const arr4=Array.of(10)    //create array with item 10
console.log(arr4)
const arr5=Array.from(arr4)  // copy arr4
console.log(arr5)

const [, ,a,,...b] = [5, 10, 15, 20, 25]
console.log(a)
console.log(typeof a)  //number
console.log(b)
console.log(typeof b)   //object (array)


a = ['a', 'b', 'c', 'd', 'e'];
i = 2;
x = 'X';
y = 'Y';
z = 'Z';
a.splice(i, 0, x, y, z);
console.log(a);

let str0 = "Hello world";
console.log(str0.indexOf("world")); // 6
console.log(str0.indexOf("o"));     // 4 (ตัว 'o' ตัวแรกที่เจอ)
console.log(str0.indexOf("z"));     // -1 (ไม่เจอ)
