const mutilply = require('./mutilply');
const divide = require('./divide');


class Calculator {
    calculate(operator, firstNumber, secondNumber) {
        return operator.operate(firstNumber, secondNumber);
    }
}


let caculator = new Calculator();
let firstNumber = process.argv[2];
let secondNumber = process.argv[3];

console.log(caculator.calculate(new mutilply(), firstNumber, secondNumber));
try {
    console.log(caculator.calculate(new divide(), firstNumber, secondNumber));
}catch(e) {
    console.log(e);
}