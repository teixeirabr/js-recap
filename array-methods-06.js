/*

/*1
removeFromBack
Submitted on Today at 10:56 PM
Write a function called "removeFromBack".

Given an array, "removeFromBack" returns the given array with its last element removed.

Notes:

You should be familiar with the method 'pop'.
var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]

 */

removeFromBack = (arr) => {
  arr.pop();
  return arr;
};
