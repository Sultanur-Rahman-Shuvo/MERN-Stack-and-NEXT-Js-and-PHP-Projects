<?php
$showAlert = false;
$showError = false;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  include 'partials/_dbconnect.php';
  $username = $_POST["username"];
  $password = $_POST["password"];
  $cPassword = $_POST["cPassword"];
  // $exists = false;
  //check wheather this username exists
  $existsSql = "SELECT * FROM `users` WHERE username='$username'";
  $result = mysqli_query($conn, $existsSql);
  $numExistRows = mysqli_num_rows($result);
  if ($numExistRows > 0) {
    // $exists = true;
    $showError = "Username already exists";
  }else{
    // $exists = false;
    if (($password == $cPassword)) {
      $hash = password_hash($password, PASSWORD_DEFAULT);
      $sql = "INSERT INTO `users` (`username`, `password`, `dt`) VALUES ('$username', '$hash' , current_timestamp())";
      $result = mysqli_query($conn, $sql);
      if ($result) {
        $showAlert = true;
      }
    }else{
      $showError = "Password do not match";
    }
  }
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <title>Sign Up</title>
  </head>
  <body>
    <?php require 'partials/_nav.php'?>
    <?php
    if ($showAlert) {
      echo "
    <div class='alert alert-success alert-dismissible fade show' role='alert'>
    <strong>Success!</strong> Your account is created and you can login now.
    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
   </div>";
    }
    if ($showError) {
      echo "
    <div class='alert alert-danger alert-dismissible fade show' role='alert'>
    <strong>Error!</strong> $showError
    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
   </div>";
    }
    ?>
    <div class="container">
      <h1 class="text-center">Sign Up to our website</h1>
      <form action="/LoginSystem/signup.php" method="post">
        <div class="mb-3">
          <label for="username" class="form-label"
            >Username</label
          >
          <input
            type="text"
            maxlength="11"
            class="form-control"
            id="username"
            name="username"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            maxlength="23"
            class="form-control"
            id="password"
            name="password"
          />
        </div>
        <div class="mb-3">
          <label for="cPassword" class="form-label">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="cPassword"
            name="cPassword"
          />
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </form>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->
  </body>
</html>
