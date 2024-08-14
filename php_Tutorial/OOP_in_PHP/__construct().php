<?php
class Employee{
    // Properties of our class
    public $name;
    public $salary;
    // Methods of our class
    // Constructor - It allows you to initialize objects. It is a code which is executed whenever a new object is instantiated.
    //This is constructor without arguments
    // function __construct(){
    //     echo "this is my constructor for my employee";
    // }
    //This is constructor with arguments
    function __construct($name, $salary){
        $this->name = $name;
        $this->salary = $salary;
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
?>