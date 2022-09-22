//For given JSON iterate over all for loops;

var student = [{
    "name":"Rajendran",
    "batch":"B40WD",
    "language":"Tamil",
    "course":"FSD"
}]
//for in
for(var details in student) {
    console.log(student[details]);
}
//for loop
for(var i=0; i<student.length; i++) {
    var res = student[i];
    console.log(res.name);
    console.log(res.batch);
    console.log(res.language);
    console.log(res.course);
}
//for of
let dis = "";
for(let a of student){
    dis = a.name;
}
console.log(dis)

