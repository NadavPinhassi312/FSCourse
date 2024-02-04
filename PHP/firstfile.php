<?php
    echo "Hello World!";
    echo " ";
?>
<div style='<?php echo "border:1px solid red"; ?>'>PHP can also interact with HTML and change the CSS in it.</div>
<?php
// Variables!
$varName = "This is a string variable ";
echo $varName;
echo "<br>";
//String Concatenation
$str="string concatenation";
echo "This is " . $str;
echo "<br>";
// String Replacement
$sentence="I like Tel Aviv";
echo str_replace("like","dislike",$sentence); //Will output "I dislike Tel Aviv"
echo "<br>";

// String Manipulation
$name="My name is Nadav";
echo substr($name,0,7); //Will echo "My name"
echo "<br>";
// ucwords($string) - Makes the first letter of the string uppercase.
$name="nadav";
$arrow="&rarr;";
echo $name ." ". $arrow ." ". ucwords($name); //echos nadav-->Nadav
echo "<br>";
// strtoupper($string) - Makes the whole string uppercase
echo strtoupper("strtoupper");
echo "<br>";
// strtolower($string) - Makes the whole string lowercase
echo strtolower("STRTOLOWER");
echo "<br>";

// HTML Entities
echo "This may look like an ". htmlentities("<html>") . " entity but it's just text.";
echo "<br>";

// Array
$cars = array("Volvo", "BMW", "Toyota"); // Numerical Array (the regular one)
$assArr = array("Nadav"=>"music", "Guilio"=>"Pasta", "Bar"=>"Army"); // Associative Array (similar to a dictionary) 
echo "Nadav likes " . $assArr["Nadav"];
echo "<br>";
echo "<br>";

// Explode and Implode
$str="The quick brown fox jumps over the lazy dog";
$exploded=explode(" ",$str,4);
foreach ($exploded as $e){
    echo $e . "<br>";
}
echo "<br>";
$names=array("Bob","Tim","Tom");
$newNames=implode(", ", $names);
echo "The glued up names are " . $newNames;       
echo "<br>";  
//Ternary operator - a short if statement
// $b = ($a > 10 ? true : false); -> will return true.
// Switch - an if/else statement with multiple possible outcomes.
$x=3;
switch($x){
    case 1:
        echo "First case";
        break; // Important! 
    case "Second":
        echo "Second case";
        break;
    default:
        echo "None of the above";
        break;
}
echo "<br>"; 

// for loops
$num=5;
for ($i=0;$i<$num;$i++){
    echo $i . " ";
}
echo "<br>"; 
// foreach loops
$fruits=array("Apple","Banana","Plum","Pear");
foreach($fruits as $value){
    echo $value . " ";
}
echo "<br>"; 
foreach ($fruits as $key=>$value){
    echo "Key: " . $key . " &rarr; " . $value . " <br/>";
}
echo "<br>"; 

// Quotation marks and apostrophes
$name="Nadav";
echo "$name"; // Displays "Nadav"
echo "<br>"; 
echo '$name'; // Displays "$name"
echo "<br>"; 
echo "<br>"; 

// Include
echo "This is text from the original file";
echo "<br>";
include "included.php";
echo "<br>";

// Functions
function FuncName(){
    return true;
}

// GET - a function that allows you to get user information from the URL.
// echo $_GET['firstname']; // when changing firstname's value in the URL, the echo changes too. APOSTROPHES ARE INPORTANT!
?>

<form method='get' action="get.php">
    Name: <input type="text" name="firstname"/>
    <input type="submit" name="submitButton" value="Submit"/>
</form>
<?php
//POST - Very similar to get, except the info inserted isn't saved in the url. Apostrophes are important again.
?>
<form method='post' action="post.php">
    Name: <input type="text" name="firstname"/>
    <input type="submit" name="submitButton" value="Submit"/>
</form>
<?php
echo date("F");
echo "<br>";


//Cookies!
// // Creating a Cookie
// Cookies are temporary data stored in expiring super global variables. The syntax is as following:
// setcookie($name,$vakue,$expires,$path,$domain,$secure,$httponly);
// $name - The name of the cookie, a string value. Example: "TCWD_Cookie";
// $value - The value of the cookie, a string. Similar to variable value. Optional.
// $expires - The time of when the cookie expires, an integer. Its best to use time() with this parameter. Example: time() + 60*60*24*30 - sets the cookie to expire in 30 days. If set to 0 or not set, the cookie will expire at the end of the session. Optional.
// $path - The path on the server in which the cookie is allowed access. If set to "/" then the cookie is allowed on the entire website. If set to "/directory/" then the cookie can only be accessed in the directory, called "/directory/ ". Optional.
// $domain - The domain that the cookie is available to, a string. Setting the domain to 'www.example.com' will make the cookie available in the www subdomain and higher subdomains.
// $httponly - A boolean, set to true if you want this cookie to be accessable ONLY through the HTTP protocol, meaning this cookie cannot be accessed through JS.
// //Accessing a Cookie
// Just like a const.
// echo $_COOKIE['cookieName'];
// //Destroying a cookie
// You have to reaassign the cookie - the same name but remove the value and set the time to the past. Example: 
// setcookie("cookieName","",time()-3600);
setcookie("cookieName",'This is my first cookie!', time()+3600);
echo $_COOKIE['cookieName'];
echo "<br>";
// setcookie("cookieName",'', time()-3600);
// echo $_COOKIE['cookieName'];

?>