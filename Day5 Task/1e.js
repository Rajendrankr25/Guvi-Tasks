//Return all palindrome in array;
let a1 = ['madam', 'raja'];
let t1 = [];
let t2 = [];
function palin(a1) {
    var len = a1.length;
    for(var i=0; i<len/2; i++) {
        if(a1[i]==a1[len-1-i]) {
            t1.push(a1[i])
        }
    }
    return t1;
}
console.log(palin(a1))