let studentsAmount = +prompt('How many students do you have?');
let studentsList = generateStudent(studentsAmount);
viewMyObj(StudentsList);

do {
    let chooseOperation = +prompt(`Choose operation: \n
    1. Best student; \n
    2. Sort the list of students; \n
    3. Students average point; \n
    4. Worst students; \n
    5. Add new student; \n
    6. Generate random student; \n`);

    switch (chooseOperation) {
        case 1:
            console.log('~~~Best Student~~~');
            viewMyObj(getTheBest(StudentsList));
            break;
        case 2:
            console.log('~~~Sordted List~~~');
            viewMyObj(sortMyList(StudentsList));
            break;
        case 3:
            console.log('~~~Average points of students~~~');
            viewMyObj(getAvaragePointOfStudent(StudentsList));
            break;
        case 4:
            console.log('~~~Students under 5 points~~~');
            viewMyObj(getTheWorst(StudentsList));
            break;
        case 5:
            viewMyObj(addStudent(StudentsList));
            console.log('~~~Student added~~~');
            break;
        case 6:
            viewMyObj(addRandomStudent(StudentsList));
            console.log('~~~Random student added~~~');
            break;
        default:
            alert(`Wrong operation! Error...`);
    }
}

while (confirm(`Repeat operations?`));

alert('Goodbye...');