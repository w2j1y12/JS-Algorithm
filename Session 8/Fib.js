/*
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8,...
which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/

function fib(num){
  // add whatever parameters you deem necessary - good luck! 
  if(num === 1 || num === 2) return 1
  else return fib(num-1) + fib(num-2)
}

fib(4)
fib(10)
fib(28)
fib(35)

/* 
<Fibonacci>

F(n) = F(n-1) + F(n-2)
but F(1) = F(2) = 1
*/
