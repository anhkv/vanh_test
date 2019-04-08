const mutilply = require('./mutilply');
const divide = require('./divide');


class Calculator {
    calculate(operator, firstNumber, secondNumber) {
        return operator.operate(firstNumber, secondNumber);
    }
}


let caculator = new Calculator();
let firstNumber = parseInt(process.argv[2], 10);
let secondNumber = parseInt(process.argv[3], 10);
console.log(caculator.calculate(new mutilply(), firstNumber, secondNumber));

try {
    console.log(caculator.calculate(new divide(), firstNumber, secondNumber));
}catch(e) {
    console.log(e);
}