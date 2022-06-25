function calc(num) {
    let result;
    math = {
        add: function (val) {
            result = +(num + val).toFixed(1);
            return result;
        },
        sub: function (val) {
            result = +(num - val).toFixed(1);
            return result;
        },
        div: function (val) {
            result = +(num / val).toFixed(1);
            return result;
        },
        mult: function (val) {
            result = +(num * val).toFixed(1);
            return result;
        },
        primary: function (val) {
            return num;
        },
        getResult: function (val) {
            return result;
        }
    };
    return math;
}

const first = calc(2);

console.log(first.add(33));
console.log(first.sub(12));
console.log(first.div(2));
console.log(first.mult(4));
console.log(first.primary());
console.log(first.getResult());