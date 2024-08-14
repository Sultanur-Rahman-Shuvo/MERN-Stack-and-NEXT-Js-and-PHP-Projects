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

//create a table in the db
$sql = "CREATE TABLE `phptrip` (`Name` VARCHAR(11) NOT NULL , `Age` INT(11) NOT NULL , `City` VARCHAR(11) NOT NULL , `Gender` VARCHAR(11) NOT NULL );
";
$result = mysqli_query($conn, $sql);
//check for the table creation success
if ($result) {
    echo "The table was created successfully<br>";
}else{
    echo "The table was not created successfully because of this error". mysqli_error($conn);
}
?>