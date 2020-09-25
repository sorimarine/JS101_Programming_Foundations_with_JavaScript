let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

for (monster in additionalAges) {
  ages[monster] = additionalAges[monster];
}

console.log(ages);

// Object.assign(ages, additionalAges);