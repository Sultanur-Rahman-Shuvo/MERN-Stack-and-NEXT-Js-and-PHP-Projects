<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login to Your Account</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Courgette&family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="css/signin.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous">
    </script>
</head>

<body>
    <div class="signin-form">
        <form action="" method="post">
            <div class="form-header">
                <h2>Create New Password</h2>
                <p>ChatterBox</p>
            </div>
            <div class="form-group">
                <label>Enter Password</label>
                <input type="password" class="form-control" name="pass1" placeholder="Enter Password" autocomplete="off"
                    required>
            </div>
            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="form-control" name="pass2" placeholder="Confirm Password"
                    autocomplete="off" required>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block btn-lg" name="change">Change</button>
            </div>
            <?php include("signin_user.php"); ?>
        </form>
    </div>
    <?php
    // Check if a session is already active
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    
    include("include/connection.php");

    if(isset($_POST['change'])){
        $user = $_POST['user_email'];
        $pass1 = $_POST['pass1'];
        $pass2 = $_POST['pass2'];

        // Check if the passwords match
        if($pass1 != $pass2){
            echo "
                <div class='alert alert-danger'>
                    <strong>Your new password didn't match with the confirm password</strong>
                </div>
            ";
        }

        // Check if the password length is at least 9 characters
        if(strlen($pass1) < 9){
            echo "
                <div class='alert alert-danger'>
                    <strong>Use 9 or more than 9 characters</strong>
                </div>
            ";
        }

        // If passwords match and meet the length requirement, update the password
        if($pass1 == $pass2 && strlen($pass1) >= 9){
            // Assuming $user is the current logged-in user's email stored in the session
            $user = $_SESSION['user_email']; 
            $update_pass = mysqli_query($con, "UPDATE users SET user_pass='$pass1' WHERE user_email='$user'");

            // Destroy the session after password change
            session_destroy();

            echo "<script>alert('Go ahead and signin')</script>";
            echo "<script>window.open('signin.php', '_self')</script>";
        }
    }
?>

</body>

</html>