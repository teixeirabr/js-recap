/*

countAllCharacters
Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:

If given an empty string, countAllCharacters should return an empty object.
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}

/*/

function countAllCharacters(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    // console.log("string at i", [str[i]]);
    if (result[str[i]] === undefined) {
      console.log("undefined", str[i]);
      result[str[i]] = 1;
      console.log("first round", result);
    } else {
      result[str[i]] += 1;
      console.log("second round", result);
    }
  }
  return result;
}

console.log(countAllCharacters("banana"));
