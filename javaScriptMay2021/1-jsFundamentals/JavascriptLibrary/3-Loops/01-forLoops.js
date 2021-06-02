/*3-Loops

There are many different kinds of loops but they all do roughly the same thing:
For statements
do While
while
labeled
break
continue
for in
for of
.forEach
.map

*/


// loop structure:
//  a) creation of an indexing variable 
//  b) a run condition
//  c) change to the indexing variable


// count to 10 from 0 log the numbers:


for (let i = 0; i <= 10; i++){
    console.log(i);
}

// loops can run infinietly

// counts to -25 by -3, starting from 2, logs the numbers

for (let i = 2; i >=-25; i = i -3){
    console.log(i);
}
// display the letters in a name individually

let name = "Bradley";
for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

// for loops can use lots of variables

let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i <= stop; i = i + increment){
    console.log(i);
}

//  1 setup an index
//  2 setup a run condition
//  3 change your index