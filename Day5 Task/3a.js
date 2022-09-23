//Print odd number in array using Arrow Function
let a1 = [1,2,3,4,5,6,7,8,9,10];
let temp = [];
let odd =()=> {
    for(let i=0; i<a1.length; i++) {
        if(a1[i]%2!=0) {
            temp.push(a1[i])
        }
    }
    return temp;
}
console.log(odd(a1));