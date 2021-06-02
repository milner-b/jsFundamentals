/* 
Conditionals - will check if a conditional is true
conditinal statements control behavior in JS and determine wherather or not pieces of code can run. 
Conditional will check if 
an expression is true. If the expression is true, a block of code will run

*/


/*
Falsey Values - considered false
1) false
2) null
3) undefined
4) 0
5) Nan (Not A Number)
6) " " (empty string)
*/

/* 
Truthy Values - considered true
1) true
2) any nummber that isn't 0 
3) "0"


*/


let snowing = true;

if (snowing == true) {
    console.log('it is snowing outside!');
}


if (snowing) {
    console.log('It is Still snowing!');
}

let snowing = false;

if (snowing == false) {
    console.log (`it stopped' snowing!!!!`);
}


if(snowing) {
    console.log(`it is not snowing`);
}


/* 
IF ELSE - if the expression is false, it will run the next block of code.
The else statement specifies a block of cade to be exicuted if the condition is false.


*/

let puppies = 3;

if (puppies < 1) {
    console.log('I need more Puppies');

} else {
    console.log('I have enough Puppies');
}


let myName = "Marco";

if (myName == "Marce") {
    console.log(`Hello! ${myName}.`);
}  else {
    console.log(`Hello, is your name ${myName}.`);
}

/*
Challenge! 
BRONZE
Write two variables. One will store your name and another will store a friend's name. 
Find out what property you can use to check how long the names are. 
Console log how many letters are in each name.
SILVER
Expand on what you have already done and write a conditional to see who has 
the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
GOLD
In the console log include how many letters difference there are between the 
names.Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been 
mentioned so far. See if you can add that to your conditional!
*/



let myName = "Brad"
let friendName = "X Æ A-Xii"

console.log(myName.length, friendName.length)

if (myName.length > friendName.length) {
    console.log(myName, "My name is longer than", friendName, "by;", myName.length-friendName.length, "letter(s)!")
} else if (myName.length == friendName.length) {
    console.log("Your name is longer")
} else {
    console.log("their name is longer:", friendName.length-myName.length, "letter(s)!")
}

let nameDif = (myName.length > friendName.length) ? (`${myName} is bigger by: ${myName.length-friendName.length} letter(s)!`) : (`${friendName} is bigger by: ${friendName.length-myName}`)



let myName = "Tony"
let friendName = "X Æ A-Xii"

console.log(myName.length)
console.log(friendName.length)

if (myName.length > friendName.length){
    console.log(`${myName}'s name is longer ${friendName}'s name.`) 
} else {
    console.log(`${friendName}'s name is longer ${myName}'s name.`)
} 

if (myName > friendName) {
    console.log(`My name is longer that ${friendName}'s by ${myName.length - friendName.length} letters`)
} else if (myName.length < friendName.length){
    console.log(`${friendName}'s is longer than mine by ${friendName.length - myName.length} letters`)
} else {
    console.log(`our names are the same length.`)
}

