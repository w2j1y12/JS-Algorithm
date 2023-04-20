function collectOddValues(arr) {

    let result = []
    // 재귀함수를 사용한다면, 함수가 호출될 때마다 result가 리셋됨
    // -> result를 function 외부에 정의

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])
