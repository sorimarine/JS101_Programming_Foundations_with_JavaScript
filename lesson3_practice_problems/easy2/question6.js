let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["BamBam", "Pebbles"]);

console.log(flintstones);
let newArray = [];
flintstones.forEach(element => newArray = newArray.concat(element));

console.log(newArray);
console.log(...flintstones);