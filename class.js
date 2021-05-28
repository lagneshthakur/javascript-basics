// classes

class Car {
    name;
    model;
    enginePower;
    constructor(name, model, enginePower) {
        console.log("Inside constructor");
        console.log(this);
        this.name = name;
        this.model = model;
        this.enginePower = enginePower;
    }
    age = () => {
        console.log("Inside age");
        console.log(this);
        let date = new Date();
        return date.getFullYear() - this.model;
    }
}

let myFord = new Car("FordMustang", 1995, "2500cc");
console.log(myFord.age());