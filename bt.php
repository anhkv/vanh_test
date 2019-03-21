<?php

   interface plus{
       public function plus();
   }
   

   interface minus{
       public function minus();
   }
   

   interface multiply{
       public function multiply();
   }
    
   interface divide{
       public function divide();
   }
   
   
   class data{
        protected $a;
        protected $b;
        protected $kq;
        
        public function setData($x, $z){
          $this->a = $x;
          $this->b = $z;
        }
   }
   
   
   
   class pl extends data implements plus{
       public function plus(){
           $this->kq = $this->a + $this->b;
           return $this->kq;
       }
   }
   
   
   class mn extends data implements minus{
       public function minus(){
           $this->kq = $this->a - $this->b;
           return $this->kq;
       }
   }
   
   
   class mt extends data implements multiply{
       public function multiply(){
           $this->kq = $this->a * $this->b;
           return $this->kq;
       }
   }
   
   
   class dv extends data implements divide{
       public function divide(){
       
           if($this->b == 0){
           		return "Lỗi";
           }else{
           		$this->kq = $this->a / $this->b;
           		return $this->kq;
           }
       }
   }
   
   
   
   $pl = new pl;
   $mn = new mn;
   $mt = new mt;
   $dv = new dv;
   
   $pl->setData(12,2);
   $mn->setData(120,2);
   $mt->setData(122,2);
   $dv->setData(120,2);
   
   echo "Tổng: ". $pl->plus()."<br>";
   echo "Hiệu: ".$mn->minus()."<br>";
   echo "Tích: ".$mt->multiply()."<br>";
   echo "Thương: ".$dv->divide()."<br>";
?>