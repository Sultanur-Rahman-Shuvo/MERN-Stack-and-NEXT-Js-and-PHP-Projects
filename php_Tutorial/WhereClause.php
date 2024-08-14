<?php
// Connecting to the Database
$servername = "localhost";
$username = "root";
$password = "";
$database = "dbshuvo";

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Die if connection was not successful
if (!$conn){
    die("Sorry we failed to connect: ". mysqli_connect_error());
}
else{
    echo "Connection was successful<br>";
}

$sql = "SELECT * FROM `phptrip` WHERE `City` = 'Jesore'";
$result = mysqli_query($conn, $sql);

// Usage of WHERE clause to fetch data from database
$num = mysqli_num_rows($result);
echo $num;
echo " records found in the DataBase<br>";
$no = 1;
if($num> 0){
    while($row = mysqli_fetch_assoc($result)){
        echo $no . "." . $row['Gender'] .  ". Hello ". $row['Name'] . " Age " . $row['Age'] . " Welcome to ". $row['City'];
        echo "<br>";
        $no = $no + 1;
    }
}

// Usage of WHERE Clause to Update Data
$sql = "UPDATE `phptrip` SET `Name` = 'Afia' WHERE `City` = 'Jesore'";
$result = mysqli_query($conn, $sql);
echo var_dump($result);
$aff = mysqli_affected_rows($conn);
echo "<br>Number of affected rows: $aff <br>";
if($result){
    echo "We updated the record successfully";
}
else{
    echo "We could not update the record successfully";
}
?>