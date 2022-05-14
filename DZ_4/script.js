let firstNum, secondNum, trigonomNum,
    calcAgainAsk = true,
    endMyCycle = false,
    resultCalc = `\n`;

    
while (calcAgainAsk) {

    let chooseOperator = prompt(`Hello, please choose the operation: \n 
(+, -, /, *, %, cos, sin, pow) \n
Check your calculations type: history`);

    switch (chooseOperator) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
        case 'pow':
            do {
                firstNum = +prompt(`Give the first number: `);                
            } while (isNaN(firstNum));
            do {                
                secondNum = +prompt(`Give the second number: `);
            } while (isNaN(secondNum));
            if (chooseOperator == '+') {
                const sumNum = firstNum + secondNum;
                alert(sumNum);
                resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${sumNum}\n`;
            } else if (chooseOperator == '-') {
                const negNum = firstNum - secondNum;
                alert(negNum);
                resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${negNum}\n`;
            } else if (chooseOperator == '/') {
                const devNum = firstNum / secondNum;
                alert(devNum);
                resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${devNum}\n`;
            } else if (chooseOperator == '*') {
                const multNum = firstNum * secondNum;
                alert(multNum);
                resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${multNum}\n`;
            } else if (chooseOperator == '%') {
                const chunkNum = firstNum % secondNum;
                alert(chunkNum);
                resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${chunkNum}\n`;
            } else if (chooseOperator == 'pow') {
                const powNum = Math.pow(firstNum, secondNum);
                alert(powNum);
                resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${powNum}\n`;
            }
            break;
        case 'sin':
        case 'cos':
            do {
                trigonomNum = +prompt(`Give the number: `);
            } while (isNaN(trigonomNum));
            if (chooseOperator == 'sin') {
                const sinNum = Math.sin(trigonomNum);
                alert(sinNum);
                resultCalc += `Sin(${trigonomNum}) = ${sinNum}\n`;
            } else if (chooseOperator == 'cos') {
                const cosNum = Math.cos(trigonomNum);
                alert(cosNum);
                resultCalc += `Cos(${trigonomNum}) = ${cosNum}\n`;
            }
            break;
        case 'history':
            alert(`Your calculations: ${resultCalc}`);
            break;
        default:
            alert(`Error, you must choose the operation! \n Please start again...`);
            location.reload();
            endMyCycle = true;
            calcAgainAsk = null;
    }
    if (endMyCycle == false) {
        calcAgainAsk = confirm(`Would you like to calculate anything else?`) ? true : alert('Have a nice day!');
    }
}