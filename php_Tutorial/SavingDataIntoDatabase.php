<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>GET & POST</title>
  </head>
  <body>
    <div class="container">
    <h1>GET & POST</h1>
    </div>

<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST["email"];
    $name = $_POST["name"];
    $desc = $_POST["desc"];

$servername = "localhost";
$username = "root";
$password = "";
$database = "contacts";
//Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);
//Die if connection was not succesful
if (!$conn) {
    die("Sorry we failed to connect: ". mysqli_connect_error());
}else{
    echo "Connection was successful<br>";
}
$sql = "INSERT INTO `contactus` (`Name`, `Email`, `Concern`) VALUES ('$name', '$email', '$desc');";
$result = mysqli_query($conn, $sql);
//add a new trip to the trib table in the database 
if ($result) {
    echo '
    <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, your entry has been saved successfully.</p>
</div>';
}else{
    echo '
    <div class="alert alert-danger" role="alert">
  <h4 class="alert-heading">Error!</h4>
  <p>Aww yeah, your entry has not been saved successfully. We are having technical issues.</p>
</div>';
}
}
?>

    <div class="container">
    <form action="/php_Tutorial/SavingDataIntoDatabase.php" method="post">
    <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="name" name="name" class="form-control" id="name" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="desc" class="form-label">Concern</label>
    <textarea class="form-control" name="desc" id="desc"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
  </body>
</html>

