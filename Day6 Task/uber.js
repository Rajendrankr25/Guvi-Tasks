//write a class to calculate the uber price.

class Uber {
    constructor(carModel, cartype, seatCapacity, kms) {
        this.carModel=carModel;
        this.cartype=cartype;
        this.seatCapacity=seatCapacity;
        this.kms=kms;
    }
}
var ride1=new Uber("Innova", "MUV", "7-Seater", "30");
var ride2=new Uber("Etios", "Sedan", "4-Seater", "200");
console.log(ride1);
