function factorial(num) {
    let total = 1;
    for(let i = num; i > 0; i --) {
        total *= i
    }
    return total
}

factorial(4)
