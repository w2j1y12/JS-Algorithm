/*
Write a function called binarySearch which accpets a sorted array and a value and return the index at which the value exists.
Otherwise, return -1.

This algorithm should be more efficient than linearSearch
- you can read how to implement it here
https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/

/*
Binary Search Pseudocode

- This function accpets a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer 
  + Create a pointer in the middle
  + If you find the value you want, return the index
  + If the value is too small, move the left pointer up
  + If the value is too large, move the right pointer down
- If you never find the value, return -1
*/

function binarySearch(arr,val){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  
  while(left<right) {
      
      let mid = (left + right) / 2;
      
      if(arr[mid] > val) {
          right = mid - 1
      }
      else if(arr[mid] < val) {
          left = mid + 1
      }
      else return mid
  }
  return -1
}

binarySearch([1,2,3,4,5],2)
binarySearch([1,2,3,4,5],3)
binarySearch([1,2,3,4,5],5)
binarySearch([1,2,3,4,5],6)
binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],10)
binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],95)
binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],100)
