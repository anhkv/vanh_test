class Operator{
    operate(firstNumber, secondNumber){};
}

class Calculator{
    calculate(operator, firstNumber, secondNumber){
        return operator.operate(firstNumber, secondNumber);
    }
}

class add extends Operator{
    operate(firstNumber, secondNumber){
        return firstNumber + secondNumber;
    }
}

class divide extends Operator{
    operate(firstNumber, secondNumber){
        if(secondNumber === 0){
            throw('abc');
        }else{
            return firstNumber/secondNumber;
        }
    }
}

var calculator = new Calculator();
console.log(calculator.calculate(new add(), 1, 2));
try{
    console.log(calculator.calculate(new divide(), 1, 0));
}catch(e){
    console.log(e);
}