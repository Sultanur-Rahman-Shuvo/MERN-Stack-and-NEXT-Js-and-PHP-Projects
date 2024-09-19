<!DOCTYPE html>
<?php
session_start();
include("includes/connection.php");
include("includes/header.php");

if (!isset($_SESSION['user_email'])) {
    header("Location: index.php");
    exit();
}

$user_email = $_SESSION['user_email'];

$query = mysqli_query($con, "SELECT * FROM users WHERE user_email='$user_email'");
$user_data = mysqli_fetch_array($query);

if (!$user_data) {
    echo "<script>alert('User data not found.'); window.open('index.php', '_self');</script>";
    exit();
}

$first_name = $user_data['f_name'];
$last_name = $user_data['l_name'];
$user_name = $user_data['user_name'];
$describe_user = $user_data['describe_user'];
$Relationship_status = $user_data['Relationship'];
$user_pass = $user_data['user_pass'];
$user_country = $user_data['user_country'];
$user_gender = $user_data['user_gender'];
$user_birthday = $user_data['user_birthday'];
$user_id = $user_data['user_id'];
?>
<html>

<head>
    <title>Edit Account Settings</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style/home_style2.css">
    <script>
    function show_password() {
        var x = document.getElementById("mypass");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    </script>
</head>

<body>
    <div class="row">
        <div class='col-sm-2'></div>
        <div class="col-sm-8">
            <form action="" method="post" enctype="multipart/form-data">
                <table class="table table-bordered table-hover">
                    <tr align="center">
                        <td colspan="6" class="active">
                            <h2>Edit Your Profile</h2>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Change Your Firstname</td>
                        <td>
                            <input class="form-control" type="text" name="f_name" value="<?php echo htmlspecialchars($first_name); ?>">
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Change Your Lastname</td>
                        <td>
                            <input class="form-control" type="text" name="l_name" value="<?php echo htmlspecialchars($last_name); ?>">
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Change Your Username</td>
                        <td>
                            <input class="form-control" type="text" name="u_name" value="<?php echo htmlspecialchars($user_name); ?>">
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Description</td>
                        <td>
                            <input class="form-control" type="text" name="describe_user" value="<?php echo htmlspecialchars($describe_user); ?>">
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Relationship Status</td>
                        <td>
                            <select class="form-control" name="Relationship">
                                <option><?php echo htmlspecialchars($Relationship_status); ?></option>
                                <option>Engaged</option>
                                <option>Married</option>
                                <option>Single</option>
                                <option>In a Relationship</option>
                                <option>It's Complicated</option>
                                <option>Separated</option>
                                <option>Divorced</option>
                                <option>Widowed</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Password</td>
                        <td>
                            <input class="form-control" style="margin-bottom: 7px;" type="password" name="u_pass" id="mypass" required value="<?php echo htmlspecialchars($user_pass); ?>">
                            <input type="checkbox" onclick="show_password()"><strong> Show Password</strong>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Email</td>
                        <td>
                            <input class="form-control" type="email" name="u_email" value="<?php echo htmlspecialchars($user_email); ?>">
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Country</td>
                        <td>
                            <select class="form-control" name="u_country">
                                <option><?php echo htmlspecialchars($user_country); ?></option>
                                <option>Bangladesh</option>
                                <option>Nepal</option>
                                <option>Bhutan</option>
                                <option>USA</option>
                                <option>UK</option>
                                <option>China</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Gender</td>
                        <td>
                            <select class="form-control" name="u_gender">
                                <option><?php echo htmlspecialchars($user_gender); ?></option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Birthdate</td>
                        <td>
                            <input class="form-control input-md" type="date" name="u_birthday" value="<?php echo htmlspecialchars($user_birthday); ?>">
                        </td>
                    </tr>

                    <!-- Recover password option -->
                    <tr>
                        <td style="font-weight: bold;">Forgotten Password</td>
                        <td>
                            <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Turn On</button>
                            <div id="myModal" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Set Recovery Question</h4>
                                        </div>
                                        <div class="modal-body">
                                            <form action="edit_profile.php" method="post">
                                                <strong>What is your school best friend name?</strong>
                                                <textarea class="form-control" cols="83" rows="4" name="recovery_question" placeholder="Someone"></textarea><br>
                                                <input class="btn btn-default" type="submit" name="set_recovery_question" value="Submit" style="width: 100px"><br><br>
                                                <pre>Answer the above question. We will ask this question if you forgot your <br>password.</pre>
                                                <br><br>
                                            </form>
                                            <?php
                                            if (isset($_POST['set_recovery_question'])) {
                                                $recovery_question = htmlentities($_POST['recovery_question']);
                                                if (empty($recovery_question)) {
                                                    echo "<script>alert('Please enter a recovery question answer.');</script>";
                                                } else {
                                                    $update = "UPDATE users SET recovery_account='$recovery_question' WHERE user_id='$user_id'";
                                                    $run = mysqli_query($con, $update);
                                                    if ($run) {
                                                        echo "<script>alert('Recovery question updated successfully.');</script>";
                                                    } else {
                                                        echo "<script>alert('Error updating recovery question.');</script>";
                                                    }
                                                }
                                            }
                                            ?>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr align="center">
                        <td colspan="6">
                            <input type="submit" class="btn" name="update" style="width: 250px;background: #303952;color:#fff" onmouseover="this.style.background='#596275'; this.style.color='#e0f7fa';" onmouseout="this.style.background='#303952'; this.style.color='#fff';" value="Update">
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <div class="col-sm-2"></div>
    </div>
</body>

</html>

<?php
if (isset($_POST['update'])) {
    $f_name = htmlentities($_POST['f_name']);
    $l_name = htmlentities($_POST['l_name']);
    $u_name = htmlentities($_POST['u_name']);
    $describe_user = htmlentities($_POST['describe_user']);
    $Relationship_status = htmlentities($_POST['Relationship']);
    $u_pass = htmlentities($_POST['u_pass']);
    $u_email = htmlentities($_POST['u_email']);
    $u_country = htmlentities($_POST['u_country']);
    $u_gender = htmlentities($_POST['u_gender']);
    $u_birthday = htmlentities($_POST['u_birthday']);

    $update = "UPDATE users SET f_name='$f_name', l_name='$l_name', user_name='$u_name', describe_user='$describe_user', Relationship='$Relationship_status', user_pass='$u_pass', user_email='$u_email', user_country='$u_country', user_gender='$u_gender', user_birthday='$u_birthday' WHERE user_email='$user_email'";
    $run = mysqli_query($con, $update);

    if ($run) {
        echo "<script>alert('Your profile has been updated.');</script>";
        echo "<script>window.open('edit_profile.php', '_self');</script>";
    } else {
        echo "<script>alert('Error updating profile.');</script>";
    }
}
?>
