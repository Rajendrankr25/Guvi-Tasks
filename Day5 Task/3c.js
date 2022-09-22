//Sum of all numbers in an array using Arrow Function

let a1 = [10,20,30,40];
let res = 0;
let sum =()=> {
    for(let i=0; i<a1.length; i++) {
        res +=a1[i];
}
return res;
}
console.log(sum(a1));