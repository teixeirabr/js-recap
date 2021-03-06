/*

getElementsThatEqual10AtProperty
Write a function called "getElementsThatEqual10AtProperty".

Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.

Notes:

If the array is empty, it should return an empty array.
If the array contains no elements that are equal to 10, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]

*/

function getElementsThatEqual10AtProperty(obj, key) {
  if (obj[key] === undefined) {
    return [];
  }

  let result = [];

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] === 10) {
      result.push(obj[key][i]);
    }
  }
  return result;
}

// var obj = {
//   key: [1000, 10, 50, 10],
// };
// console.log(getElementsThatEqual10AtProperty(obj, "key"));

/*

Write a function called "getElementsLessThan100AtProperty".

Given an object and a key, "getElementsLessThan100AtProperty" returns an array containing all the elements of the array located at the given key that are less than 100.

Notes:

If the array is empty, it should return an empty array.
If the array contains no elements less than 100, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]

/*/

getElementsLessThan100AtProperty = (obj, key) => {
  if (obj[key] === 0) {
    return [];
  }

  if (obj[key] === undefined) {
    return [];
  }

  let result = [];
  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] < 100) {
      result.push(obj[key][i]);
    }
  }
  return result;
};

var obj = {
  key: [1000, 20, 50, 500],
};
var output = getElementsLessThan100AtProperty(obj, "key");
console.log(output); // --> [20, 50]
