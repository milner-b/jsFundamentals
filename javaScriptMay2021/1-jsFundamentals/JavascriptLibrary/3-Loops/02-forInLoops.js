//  for in Loops

let student = {
    name: `Peter`,
    awesome: true,
    degree: `javascripter`,
    week: 1
};

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

// in does not require that the thing you loop through to be numbered


let catArray = [`you`, `me`, `us`, `them`, `we`];
for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

// 

// Let's write a for-in Loop that capotalizes the first letter of a name. 

let instructor = `pAul`
let capName;

for (n in instructor) {
    if (n == 0) {
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLocaleLowerCase();
    }
}
console.log(capName);

// 
// 
// FOR OF LOOPS

