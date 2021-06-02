//Comparison Operators

//equality comparison operator
console.log('3'== 3)
console.log('4'== 4)
console.log('3'== 4)

//strict equality comparison operator
console.log(3 === 3);
console.log('3' === 3);

//not equal comparison operator
console.log('3' != 4);
console.log('3' != 3);

//strict not equal comparison operator
console.log('3' !== 4);
console.log(3 !== 3);

//greater than / less than
console.log(5 > 4);
console.log(5 < 4);

//greater than or equal to
console.log(5 >= 4);
console.log(5 <= 4);

//And && (both expressions on either side of the operator must be true for "and" to return true)
console.log(1<2 && 3>0);
console.log(3<2 && 3>7);


//Or  (true on only one side)
console.log(3<2 || 3>0);
console.log(3<2 || 3>5);

let obj = {key: 'test'};
console.log(obj == {key: 'test'});

console.log(obj == obj)

let arr = [1,2,3,4];
console.log(arr == [1,2,3,4]);
console.log(arr == arr);




