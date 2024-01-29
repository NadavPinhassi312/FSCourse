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
$arrow="-->";
echo $name ." ". $arrow ." ". ucwords($name);
echo "<br>";

echo "continue the str manipulation lesson!";

?>