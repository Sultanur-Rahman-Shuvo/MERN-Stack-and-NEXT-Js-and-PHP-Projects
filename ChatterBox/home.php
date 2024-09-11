<!DOCTYPE html>
<?php 
session_start();
include("include/connection.php");

if(!isset($_SESSION['user_email'])){
    header("location:signin.php");
    exit();
} else {
?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChatterBox - Home</title>
    <link rel="stylesheet" href="css/home.css">
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
    <div class="main-section">
        <div class="row">
            <div class="col-md-3 col-sm-3 col-xs-12 left-sidebar">
                <div class="input-group searchbox">
                    <div class="input-group-btn">
                        <center><a href="include/find_friends.php"><button class="btn btn-default search-icon"
                                    name="search_user" type="submit">Add New User</button></a></center>
                    </div>
                </div>
                <div class="left-chat">
                    <ul>
                        <?php include("include/get_users_data.php"); ?>
                    </ul>
                </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-12 right-sidebar">
                <div class="row">
                    <!-- getting the user info who is logged in -->
                    <?php
                        $user = $_SESSION['user_email'];
                        $get_user = $con->prepare("SELECT * FROM users WHERE user_email=?");
                        $get_user->bind_param("s", $user);
                        $get_user->execute();
                        $result = $get_user->get_result();
                        $row = $result->fetch_assoc();

                        $user_id = $row['user_id'];
                        $user_name = $row['user_name'];
                    ?>

                    <!-- getting the user data on which user click -->
                    <?php
                        $username = "";
                        $user_profile_image = "";
                        if(isset($_GET['user_name'])){
                            $get_username = $_GET['user_name'];
                            $get_user = $con->prepare("SELECT * FROM users WHERE user_name=?");
                            $get_user->bind_param("s", $get_username);
                            $get_user->execute();
                            $row_user = $get_user->get_result()->fetch_assoc();
                            $username = $row_user['user_name'];
                            $user_profile_image = $row_user['user_profile'];
                        }

                        $total = 0; // Default message count to zero if no user is selected
                        if (!empty($username)) {
                            $stmt = $con->prepare("SELECT * FROM users_chat WHERE (sender_username=? AND receiver_username=?) OR (receiver_username=? AND sender_username=?)");
                            $stmt->bind_param("ssss", $user_name, $username, $user_name, $username);
                            $stmt->execute();
                            $run_messages = $stmt->get_result();
                            $total = $run_messages->num_rows;
                        }
                    ?>
                    <div class="col-md-12 right-header">
                        <div class="right-header-img">
                            <img src="<?php echo htmlspecialchars($user_profile_image); ?>" alt="">
                        </div>
                        <div class="right-header-detail">
                            <form method='post'>
                                <p><?php echo !empty($username) ? htmlspecialchars($username) : "No User Selected"; ?>
                                </p>
                                <span><?php echo $total; ?> messages</span>&nbsp &nbsp
                                <button name='logout' class='btn'>Logout</button>

                            </form>
                            <?php 
                            if(isset($_POST['logout'])){
                                $update_msg = $con->prepare("UPDATE users SET log_in='offline' WHERE user_name=?");
                                $update_msg->bind_param("s", $user_name);
                                $update_msg->execute();
                                header("Location:logout.php");
                                exit();
                            }
                            ?>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div id="scrolling_to_bottom" class="col-md-12 right-header-contentChat">
                        <?php 
                            if (!empty($username)) {
                                // Mark messages as read
                                $update_msg = $con->prepare("UPDATE users_chat SET msg_status='read' WHERE sender_username=? AND receiver_username=?");
                                $update_msg->bind_param("ss", $username, $user_name);
                                $update_msg->execute();

                                // Fetch messages
                                $stmt = $con->prepare("SELECT * FROM users_chat WHERE (sender_username=? AND receiver_username=?) OR (receiver_username=? AND sender_username=?) ORDER BY 1 ASC");
                                $stmt->bind_param("ssss", $user_name, $username, $user_name, $username);
                                $stmt->execute();
                                $run_msg = $stmt->get_result();
                                
                                while($row = $run_msg->fetch_assoc()){
                                    $sender_username = htmlspecialchars($row['sender_username']);
                                    $receiver_username = htmlspecialchars($row['receiver_username']);
                                    $msg_content = htmlspecialchars($row['msg_content']);
                                    $msg_date = htmlspecialchars($row['msg_date']);
                        ?>
                        <ul>
                            <?php
                                if($user_name == $sender_username AND $username == $receiver_username ){
                                    echo "<li>
                                        <div class='rightside-right-chat'>
                                            <span>$username <small>$msg_date</small></span><br><br>
                                            <p>$msg_content</p>
                                        </div>
                                    </li>";
                                }

                                else if($user_name == $receiver_username AND $username == $sender_username ){
                                    echo "<li>
                                        <div class='rightside-left-chat'>
                                            <span>$username <small>$msg_date</small></span><br><br>
                                            <p>$msg_content</p>
                                        </div>
                                    </li>";
                                }
                            ?>
                        </ul>
                        <?php
                                }
                            }
                        ?>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 right-chat-textbox">
                        <form method="post">
                            <input autocomplete="off" type="text" name="msg_content"
                                placeholder="Write your message...">
                            <button class="btn" name="submit"><i class="fa-brands fa-telegram"
                                    aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php
        if(isset($_POST['submit'])){
            $msg = htmlentities($_POST['msg_content']);
            if($msg == ""){
                echo "<div class='alert alert-danger'>
                    <strong><center>Message was unable to send</center></strong>
                </div>";
            }else if(strlen($msg)>100){
                echo "<div class='alert alert-danger'>
                    <strong><center>Message is too long. Use only 100 characters</center></strong>
                </div>";
            }else{
                $insert = $con->prepare("INSERT INTO users_chat(sender_username, receiver_username, msg_content, msg_status, msg_date) VALUES (?, ?, ?, 'unread', NOW())");
                $insert->bind_param("sss", $user_name, $username, $msg);
                $insert->execute();
            }
        }
    ?>

    <script>
    $(document).ready(function() {
        // Scroll to bottom animation
        $('#scrolling_to_bottom').animate({
            scrollTop: $('#scrolling_to_bottom').get(0).scrollHeight
        }, 1000);

        // Function to adjust chat heights
        function adjustChatHeight() {
            var height = $(window).height();
            $('.left-chat').css('height', (height - 92) + 'px');
            $('.right-header-contentChat').css('height', (height - 163) + 'px');
        }

        // Adjust chat heights on page load
        adjustChatHeight();

        // Adjust chat heights on window resize
        $(window).on('resize', adjustChatHeight);
    });
    </script>
</body>

</html>
<?php } ?>