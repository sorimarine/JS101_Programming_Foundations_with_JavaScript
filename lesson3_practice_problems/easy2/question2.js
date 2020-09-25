function reverse(array) {
  function reducer(acc, curr) {
    acc.unshift(curr);
    return acc;
  }

  return array.reduce(reducer, []);
}

function sort(array) {
  function reducer(acc, curr) {
    
  }
}

let numbers = [1, 2, 3, 4, 5];
console.log(reverse(numbers));