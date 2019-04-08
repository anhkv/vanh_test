class Divide {
    operate(firstNumber, secondNumber){
        if(secondNumber === 0){
            throw('SecondNumber other 0');
        }else{
            return parseInt(firstNumber)/parseInt(secondNumber);
        }
    }
}

module.exports = Divide;