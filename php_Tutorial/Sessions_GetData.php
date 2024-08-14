<?php
//Start the session and get the data
session_start();
if (isset($_SESSION['username'])) {
    echo "Welcome" . $_SESSION['username'];
    echo "<br>Your favourite category is " . $_SESSION['favCat'];
}else{
    echo "Please login to continue";
}

?>