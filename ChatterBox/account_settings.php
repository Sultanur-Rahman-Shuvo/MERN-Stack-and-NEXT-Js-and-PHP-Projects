<!DOCTYPE html>
<?php 
session_start();
include("include/connection.php");
include("include/header.php");

if(!isset($_SESSION['user_email'])){
    header("location:signin.php");
} else {
?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Settings</title>
    <link rel="stylesheet" href="css/find_people.css">
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

<body>
    <div class="row">
        <div class="col-sm-2">
        </div>
        <?php 
            $user = $_SESSION['user_email'];
            $get_user = "select * from users where user_email='$user'";
            $run_user = mysqli_query($con, $get_user);
            $row = mysqli_fetch_array($run_user);

            $user_name = $row['user_name'];
            $user_pass = $row['user_pass'];
            $user_email = $row['user_email'];
            $user_profile = $row['user_profile'];
            $user_country = $row['user_country'];
            $user_gender = $row['user_gender'];
        ?>
        <div class="col-sm-8">
            <form action="" method='post' enctype="multipart/form-data">
                <table class="table table-bordered table-hover">
                    <tr align="center">
                        <td colspan="6" class="active">
                            <h2>Change Account Settings</h2>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Change Your Username</td>
                        <td>
                            <input type="text" name="u_name" class="form-control" required
                                value="<?php echo $user_name; ?>"/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><a class="btn btn-default" style="text-decoration: none; font-size: 15px;"
                                href="upload.php"><i class="fa fa-user" aria-hidden="true"></i> Change Profile</a></td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Change Your Email</td>
                        <td>
                            <input type="email" name="u_email" class="form-control" required
                                value="<?php echo $user_email; ?>">
                        </td>
                    </tr>

                    <tr>
                        <td style="font-weight: bold;">Country</td>
                        <td>
                            <select class="form-control" name="u_country">
                                <option><?php echo $user_country; ?></option>
                                <option>USA</option>
                                <option>Bangladesh</option>
                                <option>UK</option>
                                <option>UAE</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Gender</td>
                        <td>
                            <select class="form-control" name="u_gender">
                                <option><?php echo $user_gender; ?></option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Forgotten Password</td>
                        <td>
                            <button type="button" class="btn btn-default" data-bs-toggle="modal"
                                data-bs-target="#myModal">Forgotten Password</button>
                            <div id="myModal" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form action="recovery.php?id=<?php echo $user_id; ?>" method="post" id="f">
                                                <strong>What is your school best friend name?</strong>
                                                <textarea class="form-control" cols="83" rows="4" name="content"
                                                    placeholder="Someone"></textarea><br>
                                                <input class="btn btn-default" type="submit" name="sub" value="Submit"
                                                    style="width: 100px;"><br><br>
                                                <pre>Answer the above question, we will ask you this question if you forgot your <br>Password.</pre>
                                                <br><br>
                                            </form>
                                            <?php
                                                if(isset($_POST['sub'])){
                                                    $bfn = htmlentities($_POST['content']);
                                                    if($bfn == ""){
                                                        echo "<script>alert('Please Enter Something')</script>";
                                                        echo "<script>window.open('account_settings.php', '_self')</script>";
                                                        exit();
                                                    }else{
                                                        $update = "update users set forgotten_answer='$bfn' where user_email='$user'";
                                                        $run = mysqli_query($con, $update);
                                                        if($run){
                                                            echo "<script>alert('Working...')</script>";
                                                            echo "<script>window.open('account_settings.php', '_self')</script>";
                                                        }else{
                                                            echo "<script>alert('Error while updating the information')</script>";
                                                            echo "<script>window.open('account_settings.php', '_self')</script>";
                                                        }
                                                    }
                                                }
                                            ?>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default"
                                                data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <a class="btn btn-default" style="text-decoration: none; font-size: 15px;"
                                href="change_password.php">
                                <i class="fa fa-key fa-fw" aria-hidden="true"></i>Change Password
                            </a>
                        </td>
                    </tr>
                    <tr align="center">
                        <td colspan="6">
                            <input type="submit" value="Update" name="update" class="btn btn-info">
                        </td>
                    </tr>
                </table>
            </form>
            <?php
                if(isset($_POST['update'])){
                    $user_name = htmlentities($_POST['u_name']);
                    $email = htmlentities($_POST['u_email']);
                    $u_country = htmlentities($_POST['u_country']);
                    $u_gender = htmlentities($_POST['u_gender']);

                    $update = "update users set user_name='$user_name', user_email='$email', user_country='$u_country',
                    user_gender='$u_gender' where user_email='$user'";

                    $run = mysqli_query($con, $update);

                    if($run){
                        echo "<script>window.open('account_settings.php', '_self')</script>";
                    }

                }
            ?>
        </div>
        <div class="col-sm-2">
        </div>
    </div>
</body>

</html>

<?php } ?>