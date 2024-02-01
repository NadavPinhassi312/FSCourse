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



?>