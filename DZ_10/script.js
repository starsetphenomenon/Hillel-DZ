function Fib(n) {
    if (n === 0 || n === 1) {
        return n;
    } else if (n < 0) {
        return ((-1) ** (n + 1)) * Fib(-n);
    }
    return Fib(n - 1) + Fib(n - 2);
}

console.log(Fib(-6));