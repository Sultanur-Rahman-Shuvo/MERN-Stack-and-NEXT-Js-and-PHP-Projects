<?php
$con = mysqli_connect("localhost", "root", "", "mychat") or die("Connection was not established");

function search_user(){
    global $con;
    
    if (isset($_GET['search_btn'])) {
        $search_query = htmlentities($_GET['search_query']);
        $get_user = "SELECT * FROM users WHERE user_name LIKE '%$search_query%' OR user_country LIKE '%$search_query%'";
    } else {
        $get_user = "SELECT * FROM users ORDER BY user_country, user_name DESC LIMIT 5";
    }
    
    $run_user = mysqli_query($con, $get_user);
    
    while($row_user = mysqli_fetch_array($run_user)){
        $user_name = $row_user['user_name'];
        $user_profile = $row_user['user_profile'];
        $country = $row_user['user_country'];
        $gender = $row_user['user_gender'];

        // Now displaying all at once
        echo "
            <div class='card'>
                <img src='../$user_profile' alt='$user_name's Profile Picture'>
                <h1>$user_name</h1>
                <p class='title'>$country</p>
                <p>$gender</p>
                <form method='post' action='../home.php?user_name=$user_name'>
                    <p><button name='add'>Chat with $user_name</button></p>
                </form>
            </div>
        ";
    }

    // Handling form submission
    if(isset($_POST['add'])){
        $user_name = $_POST['user_name']; // Add a hidden field in the form to capture the user_name
        echo "<script>window.open('../home.php?user_name=$user_name', '_self')</script>";
    }
}
?>
