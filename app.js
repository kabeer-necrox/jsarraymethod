const animal = ["doge", "rabbit","cat", "monkey"]
document.getElementById("yes").innerHTML = animal


// const fruits= ["banaa","mango","apple", "orange","watermalon"]
// document.getElementById("noo").innerHTML = fruits


let uni= ["kiu","lums", "IBA","fast","Nust","bal"]
document.write(uni)


let subjects = Array("physics","math","computer","english","urdu")
// alert(subjects)
document.write(subjects[3])
document.write(subjects[2])
document.write(subjects[0])



// araays method in javascript.........................

// const fruitss= ["banaa","mango","apple", "orange","watermalon"]

// document.write(fruitss)


// const fruitts = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruitts.length;
// document.write(size)


// const fruitts = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruitts.toString();


const hmm = ["a","b","c","d","e","f","f", "kiu"]

// console.log(hmm.toString())
hmm.pop()

hmm.push("kabeer")
hmm.shift()
hmm.unshift("mangoo")

document.write(hmm)


// for (var i = 1; i <= 20; i++) {
//     var product = 2 * i;
//     document.write("2 * " + i + " = " + product);
//   }



//   var i = 1;

// while (i <= 20) {
//   var product = 2 * i;
//   document.write("2 * " + i + " = " + product + "\n");
//   i++;
// }


// for (var i = 1; i <= 20; i++) {
//     var product = 2 * i;
//     console.log("2 * " + i + " = " + product + "\n");
//   }



// for (var i = 1; i <= 20; i++) {
//     var product = 2 * i;
//     console.log("2 * " + i + " = " + product + "\n");
//   }
  
  

// Creating an array
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Accessing elements
console.log(fruits[0]); // Output: "apple"

// Adding elements to the end
fruits.push("fig");
console.log(fruits); // Output: ["apple", "banana", "cherry", "date", "elderberry", "fig"]

// Removing the last element
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "cherry", "date", "elderberry"]

// Adding elements to the beginning
fruits.unshift("apricot");
console.log(fruits); // Output: ["apricot", "apple", "banana", "cherry", "date", "elderberry"]

// Removing the first element
fruits.shift();
console.log(fruits); // Output: ["apple", "banana", "cherry", "date", "elderberry"]

// Finding the index of an element
const index = fruits.indexOf("cherry");
console.log(index); // Output: 2

// Removing elements by index
fruits.splice(index, 1);
console.log(fruits); // Output: ["apple", "banana", "date", "elderberry"]

// Copying an array
const copyFruits = fruits.slice();
console.log(copyFruits); // Output: ["apple", "banana", "date", "elderberry"]

// Concatenating arrays
const moreFruits = ["grape", "kiwi"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["apple", "banana", "date", "elderberry", "grape", "kiwi"]

// Checking if an element exists
const hasBanana = fruits.includes("banana");
console.log(hasBanana); // Output: true

// Mapping over elements
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ["APPLE", "BANANA", "DATE", "ELDERBERRY"]

// Filtering elements
const filteredFruits = fruits.filter(fruit => fruit.length > 5);
console.log(filteredFruits); // Output: ["banana", "elderberry"]

// Reducing elements
const totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength); // Output: 22
