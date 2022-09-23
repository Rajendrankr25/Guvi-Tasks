//Return all the prime numbers in an array
let a1 = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
a1 = a1.filter((number) => {
     for(var i=2; i<=Math.sqrt(number); i++) {
         if(number % i === 0) return false;
    }
    return true;
})
console.log(a1);