<!DOCTYPE html>
<html lang="en">
<?php 
session_start();
include("include/connection.php");
include("include/header.php");

if(!isset($_SESSION['user_email'])){
    header("location:signin.php");
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
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 400px;
    margin: auto;
    text-align: center;
    font-family: Arial, sans-serif;
}

.card img {
    height: 200px;
}

.title {
    color: grey;
    font-size: 18px;
}

button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 9px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
}

#update_profile {
    position: absolute;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    color: white;
    background-color: #000;
}

label {
    padding: 7px;
    display: table;
    color: #fff;
}

input[type="file"] {
    display: none;
}
</style>

<body>
    <?php
        $user = $_SESSION['user_email'];
        $get_user = "SELECT * FROM users WHERE user_email='$user'";
        $run_user = mysqli_query($con, $get_user);
        $row = mysqli_fetch_array($run_user);

        $user_name = $row['user_name'];
        $user_profile = $row['user_profile'];
        echo "
            <div class='card'>
                <img src='$user_profile' alt='" . $user_name . "'s Profile Picture'>
                <h1>$user_name</h1>
                <form method='post' enctype='multipart/form-data'>
                    <label id='update_profile'><i class='fa fa-circle-o' aria-hidden='true'></i>Select Profile
                    <input type='file' name='u_image' size='60'></label>
                    <button id='button_profile' name='update'>&nbsp&nbsp&nbsp<i class='fa fa-heart' aria-hidden='true'></i>Update Profile</button>
                </form>
            </div>
        ";
        if(isset($_POST['update'])){
            $u_image = $_FILES['u_image']['name'];
            $image_tmp = $_FILES['u_image']['tmp_name'];
            $random_number = rand(1,100);

            if($u_image == ''){
                echo "<script>alert('Please Select Profile')</script>";
                echo "<script>window.open('upload.php', '_self')</script>";
                exit();
            } else {
                $image_name = "u_image_" . $random_number;
                move_uploaded_file($image_tmp, "images/$image_name");

                $update = "UPDATE users SET user_profile='images/$image_name' WHERE user_email='$user'";
                $run = mysqli_query($con, $update);

                if($run){
                    echo "<script>alert('Your Profile Updated!')</script>";
                    echo "<script>window.open('upload.php', '_self')</script>";
                }
            }
        }
    ?>
</body>

</html>
<?php } ?>