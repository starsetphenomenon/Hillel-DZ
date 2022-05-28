const STUDENTS_AMOUNT = 8;
const studentsList = studentsMock.getStudentList(STUDENTS_AMOUNT);
console.log(studentsList);

function getSumOfNumbers(arr) {
    let result = 0;
    arr.forEach(elem => {
        result += elem;
    });
    return result;
}

function getGroupAvg(students) {
    let studentAvgPoints = students.map(elem => Math.floor(getSumOfNumbers(elem.marks) / elem.marks.length));
    let result = Math.floor(getSumOfNumbers(studentAvgPoints) / studentAvgPoints.length);
    return 'Group average point is: ' + result;
}

console.log(getGroupAvg(studentsList));