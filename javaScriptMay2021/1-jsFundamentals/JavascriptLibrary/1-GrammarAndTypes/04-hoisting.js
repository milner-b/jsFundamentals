//  Hoisting

//exapmle 1
console.log(scissors);
var scissors = 'blue';


// example 1 breakdown

var scissors; 
console.log(scissors);
scissors = 'blue';

//  Example 2 

function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

//  Example 2 breakdown

function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);


}
hoistTest();