function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

console.log(logAtLeast5(3))
console.log(logAtLeast5(7))
