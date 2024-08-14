<?php
echo "This is the time when we connect to the MySQL database";
echo "<br>";
//Ways to connect to a database
//1. MySQLi extension -> (1. Procedural 2. Object Oriented)
//2. PDO

//connecting to the database
$servername = "localhost";
$username = "root";
$password = "";

//Create a connection
$conn = mysqli_connect($servername, $username, $password);
//Die if connection was not succesful
if (!$conn) {
    die("Sorry we failed to connect: -->". mysqli_connect_error());
}else{
    echo "Connection was successful";
}
?>