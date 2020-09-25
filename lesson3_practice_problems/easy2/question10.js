let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.match(/t/g).length); // TypeError if no match found.
console.log(statement2.split('').filter(letter => letter === 't').length);