// Literals

// 

let weekDays =['Mondat', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(weekDays.toString());
console.log(weekDays[3]);

let soup = {
    a: 'Chicken noodle',
    b: 'tomato',
    c: 'beef and barley',
}
console.log(soup.c);

// Array and object literals cna hold primitice and Complex types (arrays, objects, functions)


let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key:'test'}, function(){return 'yes'}];
//                       0   1        2         3           4                   5
console.log(complexArrLiteral[3]);
console.log(complexArrLiteral[5]);


