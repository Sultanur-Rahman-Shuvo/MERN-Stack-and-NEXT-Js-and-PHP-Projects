<?php
function processMarks($marksArr){
    $sum = 0;
    foreach ($marksArr as $value) {
        $sum += $value;
    }
    return $sum;
}

$shuvo = [98, 94, 96, 97, 89];
$sumMarks = processMarks($shuvo);
echo "Total marks scored by shuvo out of 500 is $sumMarks";
?>