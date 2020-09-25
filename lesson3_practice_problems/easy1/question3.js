let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

function containsKey(key) {
  return ages.hasOwnProperty(key);
}

console.log(containsKey('Herman'));
console.log(containsKey('Spot'));