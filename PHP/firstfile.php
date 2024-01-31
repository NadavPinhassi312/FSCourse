<?php
    echo "Hello World!";
    echo " ";
?> 
<div style='<?php echo "border:1px solid red"; ?>'>PHP can also interact with HTMl and change the CSS in it.</div>
<?php
// Variables!
$varName = "This is a string variable ";
echo $varName;
echo "<br>";
//String Conjugation
$str="string conjugation";
echo "This is " . $str;
echo "<br>";
// Sting Replacement
/*str_replace($search(What you are looking for)
              ,$replace(What you will replace your searched-for string with)
              ,$subject(The variable or string to look inside)
              ,&$count((optional) How many replacements to do at a maximum));
*/

$sentence="I like Tel Aviv";
echo str_replace("like","dislike",$sentence); //Will output "I dislike Tel Aviv"
echo "<br>";

//String Manipulation
/*
substr($string(the string you're extracting from)
       ,$start(the numerical value of where to start)
       ,&$length((optional) how many characters to extract));
*/
$name="My name is Nadav";
echo substr($name,0,7); //Will echo "My name"
echo "<br>";
// ucwords($string) - Makes the first letter of the string uppercase.
$name="nadav";
$arrow="&rarr;";
echo $name ." ". $arrow ." ". ucwords($name); //echos nadav-->Nadav
echo "<br>";
//strtoupper($string) - Makes the whole string uppercase
echo strtoupper("strtoupper");
echo "<br>";
//strtolower($string) - Makes the whole string lowercase
echo strtolower("STRTOLOWER");
echo "<br>";

//HTML Entities
echo "This may look like an ". htmlentities("<html>") . " entity but it's just text.";
echo "<br>";

//Array
$cars = array("Volvo", "BMW", "Toyota"); //Numerical Array (the regular one)
$assArr = array("Nadav"=>"music", "Guilio"=>"Pasta", "Bar"=>"Army");//Associative Array (similar to a dictionary) 
echo "Nadav likes " . $assArr["Nadav"];
echo "<br>";
echo "<br>";

//Explode and Implode
/*explode($delimiter(what will break the string apart),
          ,$string(the exploded string)
          ,limit(the amount of pieces to make, the last piece holds the rest of the string(optional)))*/
$str="The quick brown fox jumps over the lazy dog";
$exploded=explode(" ",$str,4);
foreach ($exploded as $e){
    echo $e . "<br>";
}
echo "<br>";
/*implode($glue(the string that will connect your array piece)
          ,$array(the array you want to connect))*/
$names=array("Bob","Tim","Tom");
$newNames=implode(", ", $names);
echo "The glued up names are " . $newNames;       
echo "<br>";  

// // If and Else
// if ($var1 == $var2){
//     DoSomething();
// }
// else{
//     DoSomethingElse();
// }

//Switch - an if/else statement with multiple possible outcomes.
$x=3;
switch($x){
    case 1:
        echo "First case";
        break; //Important! 
    case "Second":
        echo "Second case";
        break;
    default:
        echo "Non of the above";
        break;
}
echo "<br>"; 

//for loops
$num=5;
for ($i=0;$i<$num;$i++){
    echo $i . " ";
}
echo "<br>"; 
//foreach loops
$fruits=array("Apple","Banana","Plum","Pear");
foreach($fruits as $value){
    echo $value . " ";
}
echo "<br>"; 
foreach ($fruits as $key=>$value){
    echo "Key: " . $key . " &rarr; " . $value . " <br/>";
}
echo "<br>"; 

// //While loop
// while(condition){
//     DoSomething();
// }
// //Do..while loop
// do {
//     code executed;
// } while (condition);

//continue; - Will skip a loop cycle
//is_array($var) - Will check if $var is an array, boolean function
//Quotation marks and apostrophes
$name="Nadav";
echo "$name"; //Displays "Nadav"
echo "<br>"; 
echo '$name'; //Displays "$name"
echo "<br>"; 
echo "<br>"; 

//Include
// include $path (either the variable or the string direction to the requested file)
echo "This is text from the original file";
echo "<br>";
include "included.php";
echo "<br>";
// require "gsaegf.php";
echo "sdfg";
echo "<br>";
//Require - the same thing as include, but when include will continue working when the file is missing, require will not and the rest of the code will die.




?>