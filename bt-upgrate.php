<?php
    class Calculator{
        public function calculate(Operator $operator, float $firstNumber, float $secondNumber){
            return $operator->operate($firstNumber, $secondNumber);
        }
    }
    interface Operator{
        public function operate(float $firstNumber, float $secondNumber);
    }
    
    
    class Add implements Operator{
        public function operate(float $firstNumber, float $secondNumber){
            return $firstNumber + $secondNumber;
        }
    }
    
    class Divide implements Operator{
        public function operate(float $firstNumber, float $secondNumber){
            if($secondNumber === 0){
                throw new Exception("Đối với phép chia Số thứ 2 phải khác 0");
            }else{
                return $firstNumber / $secondNumber;
            }
        }
    }
    
    $calculator = new Calculator;
    
    echo $calculator->calculate(new Add(), 1, 2);

    try{
        $calculator->calculate(new Divide(), 5, 0);
    }catch (Exception $e){
        echo $e->getMessage();
    }
?>