class Operator{
    operate(firstNumber, secondNumber){};
}

class Calculator{
    calculate(operator, firstNumber, secondNumber){
        return operator.operate(firstNumber, secondNumber);
    }
}

class Add extends Operator{
    operate(firstNumber, secondNumber){
        return firstNumber + secondNumber;
    }
}

class Divide extends Operator{
    operate(firstNumber, secondNumber){
        if(secondNumber === 0){
            throw('SecondNumber > 0');
        }else{
            return firstNumber/secondNumber;
        }
    }
}

class Pow extends Operator{
    operate(firstNumber, secondNumber){
        var pow = 1;
        for(var i = 1; i <= secondNumber; i++){
            pow *= firstNumber;
        }
        return pow;
    }
}

var calculator = new Calculator();
console.log(calculator.calculate(new Add(), 1, 2));
console.log(calculator.calculate(new Pow(), 2, 2));

try{
    console.log(calculator.calculate(new Divide(), 1, 0));
}catch(e){
    console.log(e);
}