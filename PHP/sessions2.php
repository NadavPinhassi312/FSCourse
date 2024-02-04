<?php
session_start();
echo "This is " . $_SESSION['Course'] . " course.";
echo "<br>";
if (!isset($_SESSION['Count'])){
    $_SESSION['Count']=0;
}
echo "You have refreshed " . $_SESSION['Count'] . " times.";
$_SESSION['Count']++;
echo "<br>";

echo $_SERVER['DOCUMENT_ROOT'];
echo "<br>";
echo $_SERVER['GATEWAY_INTERFACE'];
echo "<br>";
echo $_SERVER['HTTP_HOST'];
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo $_SERVER['REMOTE_ADDR'];
echo "<br>";
echo $_SERVER['REMOTE_PORT'];
echo "<br>";
echo $_SERVER['REQUEST_METHOD'];
echo "<br>";
echo $_SERVER['REQUEST_URI'];
echo "<br>";
echo $_SERVER['SCRIPT_FILENAME'];
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];
echo "<br>";
echo $_SERVER['PHP_SELF'];
echo "<br>";
echo $_SERVER['QUERY_STRING'];
echo "<br>";
?>