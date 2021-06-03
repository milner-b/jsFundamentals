/* 

Scopes

*/

// What is scope?

// JS has both LOCAL and GLOBAL scope

// 1
var x = 12;

function scope() {
    var x = 33;
    console.log(x);
}

scope(); // Logs 33
console.log(x); // Logs12


//  2

var x = 12;

function scope() {
    x = 33; // Variable reasignment
    console.log(x);

}

scope()
console.log(x);

//3

var x = 1

function scope() {
    var x = 2;

    function scope() {
        var x = 3;
        console.log(x); //3
    }
    scope();
    console.log(x); //2
}
scope();
console.log(x); //1

//4

var x = 12

function scope() {
    var x = 33;
    if (true) {
        let x = 45;
        console.log(x); //45
    }
    console.log(x); //33
}

scope()
console.log(x); //12

//5

var x = 12;

function scope() {
    var x = 33;
    if (true); {
        var x = 45;
        console.log(x); //45
    }
    console.log(x); //45  -> var doesnt obey 'block' scope
}
scope();
console.log(x);