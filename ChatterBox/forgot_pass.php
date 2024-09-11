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
                <h2>Forgot Password</h2>
                <p>ChatterBox</p>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" name="email" placeholder="someone@site.com" autocomplete="off"
                    required>
            </div>
            <div class="form-group">
                <label>Best Friend Name</label>
                <input type="text" class="form-control" name="bf" placeholder="Someone..." autocomplete="off" required>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block btn-lg" name="submit">Submit</button>
            </div>
        </form>
        <div class="text-center small" style="color: #674288;">Back To Signin? <a href="signin.php">Click Here</a></div>
    </div>
    <?php
        session_start();
        include("include/connection.php");
            if(isset($_POST['submit'])){
                $email = htmlentities(mysqli_real_escape_string($con, $_POST['email']));
                $recovery_account = htmlentities(mysqli_real_escape_string($con, $_POST['bf']));

                $select_user = "select * from users where user_email='$email' AND forgotten_answer='$recovery_account'";
                $query = mysqli_query($con, $select_user);
                $check_user = mysqli_num_rows($query);

                if($check_user == 1){
                    $_SESSION['user_email']=$email;
                    echo "<script>window.open('create_password.php', '_self')</script>";
                }else{
                    echo "<script>alert('Your email or best friend name is incorrect')</script>";
                    echo "<script>window.open('forgot_pass.php', '_self')</script>";
                }
            }
    ?>
</body>

</html>