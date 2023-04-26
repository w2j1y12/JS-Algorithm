# Recursion
- A process (a function in our case) that calls itself
- How recursive function work
  - Invoke the same function with a different input until you reach your base case
- Base Case
  - The condition when the recursion ends.

#### Quiz 1. 재귀 퀴즈

##### 1. 자바스크립트는 함수를 호출하기 위해 어떤 도구를 쓸까요?
###### 스택호출

##### 2. 기본 케이스는 무엇인가요?
###### 재귀가 끝난 상태

- Where things go wrong
  - No base case
  - Forgetting to return or returning the wrong thing!
  - Stack overflow

``` 
// Uncaught RangeError : Maximum call stack size exceeded

functipn factorial (num) {
  if(num === 1) return 1;
  return num * factorial(num);
}
```
```
// Uncaught RangeError : Maximum call stack size exceeded

function factorial (num) {
  if(num === 1) console.log(1);
  return num * factorial(num-1);
}
```

#### Pure Recursion Tips
- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
  - 배열이나 헬퍼 메소드 없이 순수 재귀 솔루션을 작성하는 경우에 메소드(slice, spread, concat...)를 사용할 수 있음
  - 따라서 배열을 변경할 필요 X, 일종의 결과를 축적할 수 있음
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- To make copies of object use Object.assign, or the spread operator

