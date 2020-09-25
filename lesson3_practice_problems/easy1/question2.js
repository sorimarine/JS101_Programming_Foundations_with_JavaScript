let str1 = "Come over here!";
let str2 = "What's up, Doc?";

function endsInExclamation(string) {
  return string.endsWith('!');
}

console.log(endsInExclamation(str1));
console.log(endsInExclamation(str2));