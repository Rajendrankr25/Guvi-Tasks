//Remove duplicates from an array

let a1 = [1,1,2,2,2,3,4,5,3,6];
(function uniq(a1){
    console.log([...new Set(a1)]);
})(a1);