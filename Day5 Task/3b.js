//Convert all the strings to title caps in a string array
let str = ["guvi", "geeks"];
let title =()=> {
    for (let i=0; i<str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(title(str));