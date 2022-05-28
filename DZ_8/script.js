const STUDENTS_AMOUNT = 3;
const studentsList = studentsMock.getStudentList(STUDENTS_AMOUNT);

console.log(studentsList);

const studentsName = studentsList.map(elem => elem.name);

console.log(studentsName);