let str1 = "Few things in life are as important as house training your pet dinosaur";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

function checkForDino(string) {
  return /Dino/.test(string);
  // return string.match('Dino');
  // return string.includes('Dino');
  // return string.indexOf('Dino') > -1
}

console.log(checkForDino(str1));
console.log(checkForDino(str2));