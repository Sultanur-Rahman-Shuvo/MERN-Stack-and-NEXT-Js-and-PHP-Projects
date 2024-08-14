<?php
// $a = readfile("myFile.txt");
// echo $a;
// readfile("myFile.txt");
//readfile("1.png"); won't be able to interpret this file
// $fptr = fopen("myFile.txt","r");
// echo var_dump($fptr);
// if (!$fptr) {
//     die("Unable to open this file. Please enter a valid file name.");
// }
// $content = fread($fptr, filesize("myFile.txt"));
// echo $content;

//Reading a file line by line
// echo fgets($fptr);
// echo fgets($fptr);
// echo fgets($fptr);
// echo var_dump(fgets($fptr));

// while ($a = fgets($fptr)) {
//     echo $a;
// }

// echo "End of the file. :)";

//Reading a file character by character
// echo fgetc($fptr);
// while ($a = fgetc($fptr)) {
//     echo $a;
// }

//Write a program which reads the content of a file until "." has been encountered
// while ($a = fgetc($fptr)) {
//     echo $a;
//     if ($a == ".") {
//         break;
//     }
// }
// fclose($fptr);
//Write Files
$fptr_2 = fopen("myFile2.txt","w");
fwrite($fptr_2, "I am in debt to CodeWithHarry.");
fwrite($fptr_2, "Hello World.");

//Append File
$fptr_2 = fopen("myFile2.txt","a");
fwrite($fptr_2, "Ronggon is a good boy");
fclose($fptr_2);
?>