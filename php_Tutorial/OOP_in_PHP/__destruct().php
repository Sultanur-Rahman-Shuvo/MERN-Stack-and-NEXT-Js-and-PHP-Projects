<?php
class Employee{
    // Properties of our class
    public $name;
    public $salary;
    //This is constructor
    function __construct($name, $salary){
        $this->name = $name;
        $this->salary = $salary;
    }
    //This is destructor
    function __destruct(){
        echo "I am destructing $this->name <br>";
    }
}
$shuvo = new Employee("Shuvo", 4500);
$srabony = new Employee("Srabony", 10000);
$rafid = new Employee("Rafid", 100000);
echo "the salary of shuvo is $shuvo->salary";
echo "<br>";
echo "the salary of rafid is $rafid->salary";
echo "<br>";
echo "the salary of srabony is $srabony->salary";
echo "<br>";
?>