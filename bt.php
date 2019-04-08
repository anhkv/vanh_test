<?php
    class Dien{
        public $arr = [];
        public function register(Tinh $tinh){
            array_push($this->arr, $tinh);
        }

        public function tinhTienDien($n1, $n2){
            for($i = 0; $i < count($this->arr); $i++){
                if($this->arr[$i]->canHandle($n2 - $n1)){
                    return $this->arr[$i]->operate($n1, $n2);
                }
            }
        }
    }

    interface Tinh{
        public function canHandle($num);
        public function operate($n1, $n2);
    }


    class One implements Tinh{

        public $inter = 3500;
        public function canHandle($num){
            if($num <= 100){
                return true;
            }else{
                return false;
            }
        }

        public function operate($n1, $n2){
            return ($n2 - $n1) * $this->inter;
        }
    }



    $tt = new Dien();
    $tt->register(new One);
    print_r($tt->tinhTienDien(50, 150));
?>