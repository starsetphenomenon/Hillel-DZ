function randomizePoints(amount) {
    let points = [];
    for (let i = 0; i < amount; i++) {
        points[i] = Math.floor(Math.random() * 12) + 1;
    }
    return points;
}

let students = [];

function generateStudent(student) {
    for (let i = 0; i < studentsAmount; i++) {
        students[i] = {
            firstName: prompt(`Enter student №${i+1} name`),
            points: randomizePoints(6)
        };
    }
    return students;
}

function viewMyObj(list) {
    for (const i in list) {
        console.log('Student №' + (+i + 1));
        console.log(list[i].firstName);
        console.log(list[i].points);
        console.log('~~~~~~~~~~~~~~~~');
    }
}

function cloneMyObj(obj) {
    let cloneMyObj = [];

    for (const i in obj) {
        cloneMyObj[i] = {
            ...obj[i]
        };
    }
    return cloneMyObj;
}

function getAvaragePointOfStudent(list) {

    function getAvaragePoint(avpoint) {
        let sum = 0,
            avarage;
        for (let i = 0; i < avpoint.length; i++) {
            sum += avpoint[i];
        }
        avarage = sum / avpoint.length;
        return Math.floor(avarage);
    }

    let avgPoints = cloneMyObj(list),
        avg;

    for (const i in avgPoints) {
        avg = getAvaragePoint(avgPoints[i].points);
        avgPoints[i].points = avg;
    }
    return avgPoints;
}

function addStudent(list) {
    list[list.length] = {
        firstName: prompt(`Enter new student name`),
        points: randomizePoints(6)
    }
    return list;
}

function sortMyList(list) {
    let sortList = getAvaragePointOfStudent(list);
    let max;
    for (let i = 0; i < sortList.length - 1; i++) {
        for (let j = 0; j < sortList.length - i - 1; j++) {
            if (sortList[j].points < sortList[j + 1].points) {
                max = sortList[j];
                sortList[j] = sortList[j + 1];
                sortList[j + 1] = max;
            }
        }
    }
    return sortList;
}

function getTheWorst(worst) {
    let avgPoints = getAvaragePointOfStudent(worst);
    worstStudents = [];
    for (let i = 0; i < avgPoints.length; i++) {
        if (avgPoints[i].points < 5) {
            worstStudents[i] = avgPoints[i];
        }
    }
    if (worstStudents.length > 0) {
        return worstStudents;
    } else {
        console.log('No student under 5 point!')
    }

}

function getTheBest(best) {
    let max = 0,
        result = [],
        av = getAvaragePointOfStudent(best),
        bestStudent = getAvaragePointOfStudent(cloneMyObj(best));
    for (let i = 0; i < av.length; i++) {
        if (av[i].points >= max) {
            max = av[i].points;
        }
    }

    for (const i in bestStudent) {
        if (bestStudent[i].points == max) {
            result[i] = bestStudent[i];
        }
    }

    return result;
}

let studentsAmount = +prompt('How many students do you have?');
generateStudent(studentsAmount);
viewMyObj(students);

do {
    let chooseOperation = +prompt(`Choose operation: \n
    1. Best student; \n
    2. Sort the list of students; \n
    3. Students average point; \n
    4. Worst students; \n
    5. Add new student; \n`);

    switch (chooseOperation) {
        case 1:
            console.log('~~~Best Student~~~');
            viewMyObj(getTheBest(students));
            break;
        case 2:
            console.log('~~~Sordted List~~~');
            viewMyObj(sortMyList(students));
            break;
        case 3:
            console.log('~~~Average points of students~~~');
            viewMyObj(getAvaragePointOfStudent(students));
            break;
        case 4:
            console.log('~~~Students under 5 points~~~');
            viewMyObj(getTheWorst(students));
            break;
        case 5:
            viewMyObj(addStudent(students));
            console.log('~~~Student added~~~');
            break;
        default:
            alert(`Wrong operation! Error...`);
    }
}

while (confirm(`Repeat operations?`));

alert('Goodbye...');