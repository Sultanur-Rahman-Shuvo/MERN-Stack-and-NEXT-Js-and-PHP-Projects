<?php
$name = "Shuvo is a good boy";
echo $name;
echo "<br>";
echo "The length of my string is ". strlen($name); //if you want to join two string or concat then you have to use "." operator
echo "<br>";
echo str_word_count($name);
echo "<br>";
echo strrev($name);
echo "<br>";
echo strpos($name, "is");
echo "<br>"; 
echo str_replace("Shuvo", "Rafid", $name);
echo "<br>";
echo str_repeat($name, 10);
echo "<br>";
echo "<pre>";
echo rtrim("    this is Shuvo    ");
echo "</pre>";
echo "<br>";
echo "<pre>";
echo ltrim("    this is Shuvo    ");
echo "</pre>"
?>