class Calculator {
    calculate(operator, firstNumber, secondNumber) {
        return operator.operate(firstNumber, secondNumber);
    }
}


module.exports = Calculator;
