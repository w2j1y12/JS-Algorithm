function charCount(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) { // 문자가 영숫자인지의 여부를 검사하는 정규식
            if(obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;1
            };
        }
    }
    return obj;
}
