class Divide {
    operate(firstNumber, secondNumber){
        if(secondNumber === 0){
            throw('abc');
        }else{
            return firstNumber/secondNumber;
        }
    }
}

module.exports = Divide;