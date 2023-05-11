/*
Write a funcion called linearSearch which accepts an array and a value, and returns the index at which the value exists.
If the value does not exist in the array, return -1

Don't use indexOf to implement this function!
*/

/*
Linear Search Pseudocode
- This function accpets an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1
*/

function linearSearch(arr, value){
  // add whatever parameters you deem necessary - good luck!
  
  for(let i=0; i<arr.length; i++) {
      if(arr[i] === value) i
      else return -1
  }
}

linearSearch([10, 15, 20, 25, 30], 15)
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)
linearSearch([100], 100)
linearSearch([1,2,3,4,5], 6)
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)
linearSearch([100], 200)
