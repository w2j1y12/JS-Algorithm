#### Objectives

- Describe what a searching algorithm is
- Implement linear search on arrays
- Implement binary search on sorted arrays
- Implement a naive string searching algorithm
- Implement the KMP string searching alogoritm


#### How do we search?
Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.
= Linear Search

- There are many different search methods on arrays in JavaScript
  - indexOf
  - includes
  - find
  - findIndex
- Linear Search Pseudocode
  - This function accpets an array and a value
  - Loop through the array and check if the current array element is equal to the value
  - If it is, return the index at which the element is found
  - If the value is never found, return -1
