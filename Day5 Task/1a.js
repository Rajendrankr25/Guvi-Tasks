//Print odd numbers in an array
let a1 = [1,2,3,4,5,6,7,8,9,10];
let temp = [];
let odd = function() {
    for(let i=0; i<a1.length; i++) {
        if(a1[i]%3==0) {
            temp.push(a1[i])
        }
    }
}
odd();
console.log(temp);