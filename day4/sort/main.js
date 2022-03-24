const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
// Spread operator
const num2 = [...numbers]

num2.sort(function(a, b) {
  return a - b
});

// num2.reverse()
 
console.log(numbers, num2);

// const words = ['Hello', 'aA', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];
 
// words.sort();
 
// console.log(words);