const STUDENTS_AMOUNT = 8;
const studentsList = studentsMock.getStudentList(STUDENTS_AMOUNT);
console.log(studentsList);

function getSumOfNumbers(arr) {
    let result = arr.reduce((res, elem) => {
        return res += elem;
    });
    return result;
}

function getGroupAvg(students) {
    let studentAvgPoints = students.reduce((res, elem, ind, arr) => {
        res += Math.floor(getSumOfNumbers(elem.marks) / elem.marks.length);
        if (ind === arr.length - 1) {
            return Math.floor(res / arr.length);
        }
        return res;
    }, 0);
    return 'Group average point is: ' + studentAvgPoints;
}

console.log(getGroupAvg(studentsList));