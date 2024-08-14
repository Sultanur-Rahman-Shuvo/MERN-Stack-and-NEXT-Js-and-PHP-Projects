<?php
    //Access Modifiers in PHP
    // 1. Public - can be accessed from anywhere 
    // 2. Private - can only be accessed from within the class
    // 3. Protected - can be accessed from within the class and from derived class
    // by default the properties and methods are treated as public
    // private properties and method can only be accessed by other member functions of the class
    class Employee{
        // var $name = "shuvo";
        private $name = "shuvo";
        function showName(){
            echo "$this->name";
        }
    }
    $shuvo = new Employee();
    // echo "$shuvo->name"; //this will not work if shuvo is private
    $shuvo->showName();
?>