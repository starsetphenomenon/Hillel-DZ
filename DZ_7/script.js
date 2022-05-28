let arr = [5, 3, 8, 1, 2, 17, 25, -4, 0, -12];

function filterRange(arr, a, b) {
    return arr.filter(elem => elem <= b && elem >= a);
}

console.log(filterRange(arr, 1, 4));