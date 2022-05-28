function getFibonacciNumber(n) {
    if (n === 0 || n === 1) {
        return n;
    } else if (n < 0) {
        return ((-1) ** (n + 1)) * getFibonacciNumber(-n);
    }
    return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
}

console.log(getFibonacciNumber(-6));