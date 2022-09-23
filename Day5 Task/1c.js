//Sum of all numbers in an array
let a1 = [10,20,30,40];
let res = 0;
//Anonymous function
let sum = function() {
    for(let i=0; i<a1.length; i++) {
        res +=a1[i];
}
}
sum();
console.log(res);
//IIFE
(function sum() {
    for(let i=0; i<a1.length; i++) {
        res +=a1[i];
}
})(sum(a1))