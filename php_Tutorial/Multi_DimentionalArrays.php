<?php
$multiDim = array(
    array(1,2,3,4),
    array(5,6,7,8),
    array(9,1,8,2)
);
// echo $multiDim[1][2];

//printing contents of 2-D arrays
// for ($i=0; $i < count($multiDim); $i++) { 
//     echo var_dump($multiDim[$i]);
//     echo "<br>";
// }

for ($i=0; $i < count($multiDim); $i++) { 
    for ($j=0; $j < count($multiDim[$i]); $j++) { 
        echo $multiDim[$i][$j];
        echo " ";
    }
    echo "<br>";
}
?>