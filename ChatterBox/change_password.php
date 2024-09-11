<!DOCTYPE html>
<html lang="en">
<?php 
session_start();
include("include/connection.php");
include("include/header.php");

if(!isset($_SESSION['user_email'])){
    header("Location: signin.php");
    exit();
} else {
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Profile Picture</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous">
    </script>
</head>

<style>
body {
    overflow-x: hidden;
}
</style>

<body>
    <div class="row">
        <div class="col-sm-2"></div>

        <div class="col-sm-8">
            <form action="" method="post" enctype="multipart/form-data">
                <table class="table table-bordered table-hover">
                    <tr align="center">
                        <td colspan="6" class="active">
                            <h2>Change Password</h2>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Current Password</td>
                        <td>
                            <input type="password" name="current_pass" class="form-control" required
                                placeholder="Current Password" />
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">New Password</td>
                        <td>
                            <input type="password" name="u_pass1" class="form-control" required
                                placeholder="New Password" />
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Confirm Password</td>
                        <td>
                            <input type="password" name="u_pass2" class="form-control" required
                                placeholder="Confirm Password" />
                        </td>
                    </tr>
                    <tr align="center">
                        <td colspan="6">
                            <input type="submit" name="change" value="Change" class="btn btn-info" />
                        </td>
                    </tr>
                </table>
            </form>
            <?php
                if(isset($_POST['change'])){
                    $c_pass = $_POST['current_pass'];
                    $pass1 = $_POST['u_pass1'];
                    $pass2 = $_POST['u_pass2'];

                    $user = $_SESSION['user_email'];
                    $get_user = "SELECT * FROM users WHERE user_email='$user'";
                    $run_user = mysqli_query($con, $get_user);
                    $row = mysqli_fetch_array($run_user);
                    $user_password = $row['user_pass'];

                    if($c_pass !== $user_password){
                        echo "
                            <div class='alert alert-danger'>
                                <strong>Your old password doesn't match</strong>
                            </div>
                        ";
                    }
                    
                    if($pass1 != $pass2){
                        echo "
                            <div class='alert alert-danger'>
                                <strong>Your new password didn't match with the confirm password</strong>
                            </div>
                        ";
                    }
                    
                    if(strlen($pass1) < 9){
                        echo "
                            <div class='alert alert-danger'>
                                <strong>Use 9 or more than 9 characters</strong>
                            </div>
                        ";
                    } else {
                        $update_pass = mysqli_query($con, "UPDATE users SET user_pass='$pass1' WHERE user_email='$user'");
                        if($update_pass) {
                            echo "
                                <div class='alert alert-success'>
                                    <strong>Your password is changed</strong>
                                </div>
                            ";
                        } else {
                            echo "
                                <div class='alert alert-danger'>
                                    <strong>Failed to change password. Please try again.</strong>
                                </div>
                            ";
                        }
                    }
                }
            ?>
        </div>
        <div class="col-sm-2"></div>
    </div>
</body>

</html>
<?php } ?>