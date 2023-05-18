/*
Write a function called binarySearch which accpets a sorted array and a value and return the index at which the value exists.
Otherwise, return -1.

This algorithm should be more efficient than linearSearch
- you can read how to implement it here
https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/

/*
Binary Search Pseudocode

- This function accpets a sorterd array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer 
  + Create a pointer in the middle
  + If you find the value you want, return the index
  + If the value is too small, move the left pointer up
  + If the value is too large, move the right pointer down
- If you never find the value, return -1
*/
