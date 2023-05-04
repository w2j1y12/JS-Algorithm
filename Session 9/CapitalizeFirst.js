/* 
Write a recursive function called capitalizeFirst.
Given an array of strings, capitalize the first letter of each string in the array.
*/

/*

function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = arr[0];
  
  if(arr.length === 0) return newArr;

  newArr = newArr.concat(capitalizeFirst(newArr.push(arr.slice(1).toUpperCase())));
  return newArr;
}

capitalizeFirst(['car'],['taco'],['banana'])
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


// 난 이렇게 하고싶었는데 안 됨
*/

function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}
