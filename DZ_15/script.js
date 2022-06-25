function calc(num) {
    let result;
    let final = num;
    math = {
        add: function (val) {
            result = +(num + val).toFixed(1);
            final = +(final + result).toFixed(1);
            return result;
        },
        sub: function (val) {
            result = +(num - val).toFixed(1);
            final = +(final + result).toFixed(1);
            return result;
        },
        div: function (val) {
            result = +(num / val).toFixed(1);
            final = +(final + result).toFixed(1);
            return result;
        },
        mult: function (val) {
            result = +(num * val).toFixed(1);
            final = +(final + result).toFixed(1);
            return result;
        },
        primary: function (val) {
            return num;
        },
        getResult: function (val) {
            return final;
        }
    };
    return math;
}

const first = calc(4);

console.log(first.add(33));
console.log(first.sub(12));
console.log(first.div(2));
console.log(first.mult(4));
console.log(first.getResult());