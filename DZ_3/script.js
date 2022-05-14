//  Данное задание должно расширять ДЗ 3. Калькулятор V1.1 
//  и должно быть выполнено с учетом использования циклов while/do..while 
//  и ветвлений if..else/switch.

//  К уже имеющемуся функционалу нужно следующее:

// - проверка на NaN - пользователь должен вводить значения в prompt до тех пор,
//  пока не введет число
// - повторное выполнение расчетов - после того, как пользователь закончит с расчетами,
//  мы должны показать ему диалог и спросить желает ли он повторить расчеты
// ** реализовать возможность хранения истории результатов - в список возможных операций
//  нужно добавить операцию просмотра выполненных расчетов за сессию 
//  (до перезагрузки страницы)

let firstNum, secondNum, trigonomNum, calcagainAsk, resultCalc = `\r\n`;

do {

    let chooseOperator = prompt(`Hello, please choose the operation: \r\n 
(+, -, /, *, %, cos, sin, pow)`);

    switch (chooseOperator) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
        case 'pow':
            do {
                firstNum = +prompt(`Give the first number: `);
                secondNum = +prompt(`Give the second number: `);
            } while (isNaN(firstNum) || isNaN(secondNum));
            break;
        case 'sin':
        case 'cos':
            do {
                trigonomNum = +prompt(`Give the number: `);
            } while (isNaN(trigonomNum));
            break;
        default:
            alert(`Error, you must choose the operation! \r\n Please start again...`);
            location.reload();
    }

    if (chooseOperator == '+') {
        const sumNum = firstNum + secondNum;        
        alert(sumNum);
        resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${sumNum}`;
    } else if (chooseOperator == '-') {
        const negNum = firstNum - secondNum;
        alert(negNum);
        resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${negNum}`;
    } else if (chooseOperator == '/') {
        const devNum = firstNum / secondNum;
        alert(devNum);
        resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${devNum}`;
    } else if (chooseOperator == '*') {
        const multNum = firstNum * secondNum;
        alert(multNum);
        resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${multNum}`;
    } else if (chooseOperator == '%') {
        const chunkNum = firstNum % secondNum;
        alert(chunkNum);
        resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${chunkNum}`;
    } else if (chooseOperator == 'sin') {
        const sinNum = Math.sin(trigonomNum);
        alert(sinNum);
        resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${sinNum}`;
    } else if (chooseOperator == 'cos') {
        const cosNum = Math.cos(trigonomNum);
        alert(cosNum);
        resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${cosNum}`;
    } else if (chooseOperator == 'pow') {
        const powNum = Math.pow(firstNum, secondNum);
        alert(powNum);
        resultCalc += `${firstNum} ${chooseOperator} ${secondNum} = ${powNum}`;
    }
        

} while(calcagainAsk);

calcagainAsk = confirm(`Would you like to calculate anything else?`);