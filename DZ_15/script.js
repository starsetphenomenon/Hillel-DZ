function calc(num) {
    let result = 0;
    let final = num;
    math = {
        add: function (val) {
            result = +(num + val).toFixed(1);
            final = +(final + result - num).toFixed(1);
            return result;
        },
        sub: function (val) {
            result = +(num - val).toFixed(1);
            final = +(final + result - num).toFixed(1);
            return result;
        },
        div: function (val) {
            result = +(num / val).toFixed(1);
            final = +(final / val).toFixed(1);
            return result;
        },
        mult: function (val) {
            result = +(num * val).toFixed(1);
            final = +(final * num).toFixed(1);
            return result;
        },
        getPrimary: function (val) {
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
console.log(first.getPrimary());
console.log(first.getResult());