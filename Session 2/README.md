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

#### Quiz 1

##### 다음 빅오 표현식을 간단히 해보세요
###### 1. O(n+10) -> O(n)
###### 2. O(100*n) ->O(n)
###### 3. O(25) -> O(1)
###### 4. O(n^2 + n^3) -> O(n^3)
###### 5. O(n+n+n+n) -> O(n)

#### Quiz 2

##### 아래 함수에 대한 시간 복잡도를 구하세요.
###### 1. O(n)
```
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
      console.log(i);
  }
}
```

###### 2. O(1)
```
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
  }
}
```


###### 3. O(n)
```
function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
  }
}
```


###### 4. O(n)
```
// 배열의 짝수번째 인덱스만 출력하는 function

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if(i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
```

###### 5. O(n^2)
``` 
function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for(var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
```
