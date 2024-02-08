<?php
$err= $_FILES['uploadFile']['error']; // assigned new variable: acceptable
if ($err > 0) {
    // if error value is larger than 0, there is an error.
    echo "There was an error: ". $err;
} 
else {
    echo "File Name is: " . $_FILES['uploadFile']['name'];
        echo "<br />";
    echo "File Type is: " . $_FILES['uploadFile']['type'];
        echo "<br />";
    echo "Total File Size: " . $_FILES['uploadFile']['size'];
        echo "<br />";
    echo "Temp File Stored In: " . $_FILES['uploadFile']['tmp_name'];
}

if($err<=0){
    $file=$_FILES['uploadFile']['name'];
    $temp=$_FILES['uploadFile']['tmp_name'];

    move_uploaded_file($temp,"C:\wamp64\www/" . $file);

}

?>