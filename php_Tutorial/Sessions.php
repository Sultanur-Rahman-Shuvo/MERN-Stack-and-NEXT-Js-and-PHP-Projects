<?php
//What is session
//to manage information across different pages
//varify the user login info
session_start();
$_SESSION['username'] = "Shuvo";
$_SESSION['favCat'] = "Books";
echo "We have saved your session";
?>