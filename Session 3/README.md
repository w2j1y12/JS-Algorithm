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
- When you need fast access / insertion and removal (sort of...) 한 칸씩 땡겨져 가니까 복잡해짐
  - Insertion - It depends
  - Removal - It depends
  - Searching - O(N)
  - Access - O(1) 접근이라 한 칸씩 옮겨가는 것이 x, element마다 지름길(?)이 있대

Big O of Array Operations
- push - O(1) 배열의 맨 끝에 추가
- pop - O(1) 배열의 맨 끝에 제거
- shift - O(N) 배열의 맨 앞에 제거
- unshift - o(N) 배열의 맨 앞에 추가
- concat - O(N) 여러 배열을 합쳐줌
- slice - O(N) 배열의 일부를 가져옴 = N개만큼 카피
- splice - O(N) element를 제거하고 추가함 
- sort - O(N*logN)
- forEach / map / filter / reduce / etc. - O(N)
