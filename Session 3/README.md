# 배열과 오브젝트의 성능 평가

#### Object
- When you don't need order
- When you need fast access / insertion and removal
  - Insertion - O(1)
  - Removal - O(1)
  - Searching - O(N)
  - Access - O(1)


#### Big O of Object Methods
- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(N)
- hasOwnProperty - O(1)

#### Quiz 4. 오브젝트 연산 퀴즈

##### 1. 오브젝트에 키와 값을 추가하기 위한 빅오는 무엇일까요? - O(1)
##### 2. 오브젝트의 키에 접근하기 위한 빅오는 무엇일까요? -O(1)
##### 3. 오브젝트의 키를 제거하기 위한 빅오는 무엇일까요 - O(1)

#### Array
- When you need order
- When you need fast access / insertion and removal (sort of...)
  - Insertion - It depends
  - Removal - It depends
  - Searching - O(N)
  - Access - O(1)

Big O of Array Operations
- push - O(1)
- pop - O(1)
- shift - O(N)
- unshift - o(N)
- concat - O(N)
- slice - O(N)
- splice - O(N)
- sort - O(N*logN)
- forEach / map / filter / reduce / etc. - O(N)
