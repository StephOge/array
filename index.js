// 1.What are the differences between mutating array methods and non-mutation array methods in JavaScript.
// Mutating arrays are array methods that mutate the original array, Changes the original array by adding, removing, or modifying elements while 
// non-mutating arrays are array methods that do not mutate the original array, does not change the original array, but returns a new array with the desired modifications.

//  1b. List 5 array methods that fall under each of them.

// Mutating array: push(), pop(), shift(), unshift(), splice(), 
// Non-mutating array: concat(), slice(), filter(), map(), reduce(),


// 2.  Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
// Add ‘Kotlin’ to the end of the array
// Add ‘Java’ after ‘Ruby’
// Remove the first item in the array
// Add ’Scala’ and ‘Swift’ to the beginning of the array
// Replace ‘PHP’ with ‘Go’ and ‘Rust’

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
languages.push = ('Kotlin');

languages.splice = (3, 0, 'java');

languages.shift();

languages.unshift('Scala', 'Swift');

languages.splice(languages.indexOf('PHP'), 1, 'Go', 'Rust');
console.log(languages); 

// 3.  What will be the value of fruit after calling the function changeFruit?
  let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

     Fruit = ['apple', 'mango', 'orange']


// 4.  Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10
function max(numbers) {
    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];yj
      }
    }
    return maxNumber;
  }
  

// 5.   Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each 
// value multiplied by the index it is at in the array:
// e.g.,
//  valTimesIndex([1,2,3]) // [0,2,6]
// 		valTimesIndex([5,10,15]) // [0,10,30]

valTimesIndex([3, 5, 6])

To call the function,

let array = [2, 4, 8];
let multipliedResult = valTimesIndex(array);

console.log(multipliedResult);