//Return all the prime numbers in an array
let a1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let temp = [];
let prime = ()=> {
    for(let i=0; i<a1.length; i++) {
        if(a1[i]%a1[i]===0) {
            temp.push(a1[i])
        } 
    }
}
prime();
console.log(temp);