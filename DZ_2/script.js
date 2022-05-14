let firstNum = +prompt('Type a number:');
if (isNaN(firstNum)) {
    alert('Error, it is not a number! Start again please...');
    location.reload();
} else {
    let secondNum = +prompt('Type a second number:');
    if (isNaN(secondNum)) {
        alert('Error, it is not a number! Start again please...');
        location.reload();
    } else {
        let sumNum = firstNum + secondNum;
        let diffNum = firstNum - secondNum;
        let multNum = firstNum * secondNum;
        let divNum = firstNum / secondNum;
        alert(`Calculations are finished!
Sum: ${firstNum} + ${secondNum} = ${sumNum}
Diff: ${firstNum} - ${secondNum} = ${diffNum}
Mult: ${firstNum} * ${secondNum} = ${multNum}
Div: ${firstNum} / ${secondNum} = ${divNum}`);
    }
}