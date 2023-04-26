function collectOddValues(arr) {
    let newArr = [];
    // 앞 코드와 마찬가지로 매번 newArr가 리셋됨
    // 여기서 차이점은 배열이 리셋돼도 상관이 없음
    

    if(arr.length === 0) {
        return newArr;
    }
    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    // concat : 메서드를 호출한 배열 뒤에 각 인수를 순서대로 붙여 새로운 배열을 만듦
    return newArr;
}

collectOddValues([1,2,3,4,5])
/*

[1].concat(collectOddValues([2,3,4,5]))
        [].concat(collectOddValues([3,4,5]))
            [3].concat(collectOddValues([4,5]))
                [].concat(collectOddValues([5]))
                    [5].concat(collectOddValues([]))
                        []

=> arr.length === 0
=> 빈배열에서 역순으로 concat

*/
