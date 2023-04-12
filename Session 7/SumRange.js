function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

// 호출 스택에서 모든 값이 반대 순서로 합산됨

sumRange(4)
