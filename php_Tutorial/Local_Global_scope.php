<?php
$a = 50;//global variable
$b = 90;//global variable
function printValue() {
    $a = 97;//local variable
    $a = 96;//local variable
    global $a, $b;//give me the access of global variables
    $a = 100;
    $b = 5;
    echo "The value of your variable a is $a and b is $b";
}
// echo $a, $b;
echo "<br>";
printValue();
echo "<br>";
echo var_dump($GLOBALS["a"]);
echo var_dump($GLOBALS["b"]);
?>