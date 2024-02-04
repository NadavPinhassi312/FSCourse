<?php
if (!isset($_SESSION)){
    session_start();
}
$_SESSION['Course'] = "The Complete Web Developer";
session_write_close();

echo $_SESSION['Course'];
?>
