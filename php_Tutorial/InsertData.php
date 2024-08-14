<?php
//connecting to the database
$servername = "localhost";
$username = "root";
$password = "";
$database = "dbshuvo";
//Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);
//Die if connection was not succesful
if (!$conn) {
    die("Sorry we failed to connect: ". mysqli_connect_error());
}else{
    echo "Connection was successful<br>";
}
$name = "Ronggon";
$destination = "Rajshahi";
$sql = "INSERT INTO `phptrip` (`Name`, `Age`, `City`, `Gender`) VALUES ('$name', '12', '$destination', 'Male');";
$result = mysqli_query($conn, $sql);
//add a new trip to the trib table in the database 
if ($result) {
    echo "The record has been inserted successfully<br>";
}else{
    echo "The record was not inserted successfully because of this error". mysqli_error($conn);
}
?>