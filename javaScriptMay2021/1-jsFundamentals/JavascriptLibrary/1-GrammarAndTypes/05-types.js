// TYPES


//Boolean
var on = true;
console.log(on)

let off = false;
console.log(off);


//boolean can rep: true/false yes/no. on/off, 0/1

// undefined
//usually means a verable has been declared, but it's not been assigned a value

let grass
console.log(grass);

var undef =undefined;
console.log(undef);

//null
// null means a variable declared and assigned a value of null


var empty = null;
console.log(empty);


//Null and Undefined both rep with no value inside think of it this was
//Null valies are for gag gifts are boxes intinatailly given with nothing inside ( that't the gag)
//Undefined values are gifts given with forgotten gifts inside. 


//Numbers

let myLiteralAge = 90
console.log(myLiteralAge);

let precise = -999999999999999;
console.log(precise);


let rounded = -9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
// String is any vale within quotes; JS spits out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'songle quotes'

console.log(stringOne, stringTwo);


//string concatination vs addition

let first = 1050 + 100;
let second = "1050 + 100";

console.log(first);
console.log(second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third);


//Interpolation
//lets you use strings with dynamic content ( they require backticcks)

//Ex 1
let age = 42;
let string = `my age is: ${age}` //  backticks```````````
console.log(string);




//Objects
//what is an object = 
//An obect is a container that stores property names and their values
//(it can hold multiple data types)
//Denoted by {}
//have keys and values. -- color (key): 'blue' (value), seperated with a colon, each key-value pair is seperated with a comma

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}

console.log(hulk)

console.log(hulk.age);
console.log(hulk.color)
console.log(typeof hulk) 



//Array
//Arrays store multiple valuse ina an ordered way.
//Thet too hold multiple data types.
//denoted by [] has values('blue', 'green')

var stepsToBrushTeeth = ['get up', 'poop', 'code']
console.log(stepsToBrushTeeth);

console.log(stepsToBrushTeeth[1]);
console.log(typeof stepsToBrushTeeth)
