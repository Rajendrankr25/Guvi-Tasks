//Write a “person” class to hold all the details;

class Person {
    constructor(name, age, dob, native, mobile, email, batch) {
        this.name=name;
        this.age=age;
        this.dob=dob;
        this.native=native;
        this.mobile=mobile;
        this.email=email;
        this.batch=batch;
    }
}
var p1 = new Person("Rajendran", "29", "25-July-1993", "Coimbatore", "9176227713", "rajendrankr25@gmail.com", "FSD-B40WD-Tamil");
console.log(p1);

