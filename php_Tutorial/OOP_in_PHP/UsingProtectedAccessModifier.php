<?php
class Employee{
    public $name;
    public $salary;
    public function __construct($name, $salary){
        $this->name = $name;
        // $this->lang = $lang;
        $this->salary = $salary;
        $this->describe();
    }
    protected function describe(){ //private or protected are same in this case
        echo "Name of the programmer: $this->name <br>";
        echo "Language of the programmer: $this->lang <br>";
        echo "Salary of the programmer: $this->salary <br>";
    }
}

class Programmer extends Employee{
    public $lang = "PHP";
    public function __construct($name, $lang, $salary){
        $this->name = $name;
        $this->lang = $lang;
        $this->salary = $salary;
        $this->describe();
    }
}
$shuvo = new Employee("Shuvo", 2000);
$rafid = new Programmer("Rafid", "Python", 200000);
// $shuvo->describe(); //cannot call private function outside Employee class
?>