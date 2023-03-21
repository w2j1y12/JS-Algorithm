# Big O Notation
- 정식으로 입력된 내용이 늘어날 수록 알고리즘에 실행 시간이 어떻게 변하는지 설명하는 공식적인 방법
  - 알고리즘의 효율성을 표기해주는 표기법
  - 입력의 크기와 실행시간의 관계

f(n) = n이라는 값이 입력되는 function / n = 출력   
-> f(n) = n   
-> 입력 = 실행 시간

f(n) could be linear **(f(n) = n)**   
// 선형 : n과 실행 시간 비례   

f(n) could be quadratic **(f(n) = n^2)**   
// 이차 : n과 실행시간이 n^2하게 증가   

f(n) could be constant **(f(n) = 1)**   
// 상수 : 어떠한 n이라도 실행 시간에 영향을 끼치지 않음   

f(n) could be something entirely different!

#### Shorthands
1. Arithmetic operations are constant(+, -, /)
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

![image](https://user-images.githubusercontent.com/62472117/226624456-2e82e42e-5bb7-48ca-a18c-eb5de427286b.png)
