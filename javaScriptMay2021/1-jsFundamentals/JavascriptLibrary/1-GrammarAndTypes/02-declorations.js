/*

Variables


1-gramarAndTypes
  02-decelations.js
*/

// what is a varable?
var a = 1;
var b = 2;
console.log(a + b);

// notes on naming varibles
//1. a variable must begin with ta letter, underscore, or dollar sign
// 2. numbers may follow the above characters, but cannot come first
// 3. JS is case sensitive-- "hello" and "Hello" are differnt variavles

/**
 * DECLORATIONS, INITIONALATIONS, ASSIGNMENT
 * 
 * Declarations refer to when we "declare" a varable
 * 
 * 
 * Initionalations refer to the na variable is assigned a value
 * 
 * Assingment refers to giving a verable a value. This can be after Initionalation
 * 
 * 
 */

var x;
console.log('Declaration 1', x);  // undefined

x = 10
console.log('initialization 1', x);  // 10

x = 33
console.log('assignment 1', x);


var y;
console.log(y);

y = 'hello';
console.log(y);

y = 'you are my fren';
console.log(y);


/**
 * 
 * var, let and const
 * 
 * Var = old  keyword for variables                  bucket no lid
 * Let = new keyword. (intorduced with ES6          bucket no lid
 * Const = also new declare unchanged varables).     bucket with lid
 */

let tonight = 'great!';
const elevenFifty = "amazing!";
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

//elevenFifty = 'Super!';

