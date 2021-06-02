// ****** CHALLENGES ********

/**************************
FIZZ BUZZ (Conditionals Only)
**************************/

/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

/*
var FB = 12;

if (FB / 3 % 2 == 0){
    console.log("Fizz")
} else {(FB / 5 % 2 == 0)
    console.log("Buzz")
}
*/


//IF/Else Conditional
let FB = 12;

//modulous operator is math operator that returns the division remainder
if (FB % 3 === 0 && FB % 5 === 0) { //&& operator is a logical operator that allows us to compare two more expressions.
    console.log("Fizz Buzz");
} else if (FB % 5 === 0) {
    console.log("Buzz");
} else if (FB % 3 === 0) {
    console.log("Fizz");
} else {
    console.log("Your number is not divisible by 3 or 5.");
}

//Switch

let FB = 22;

switch (true) {
    case (FB % 3 === 0 && FB % 5 === 0):
        console.log("Fizz Buzz");
        break;

    case (FB % 5 === 0):
        console.log("Buzz");
        break;

    case (FB % 3 === 0):
        console.log("Fizz");
        break;

    default:
        console.log('You number is not divisible')
}


let FB = 2020698465321;

(FB % 3 === 0 && FB % 5 === 0) 
? console.log("Fizz Buzz")
: (FB % 5 === 0) 
? console.log("Buzz") 
: (FB % 3 === 0) 
? console.log("Fizz") 
: console.log('You number is not divisible')