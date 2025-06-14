class unicorn{
    constructor(name,color){
        this.name = name
        this.color = color
    }
    sparkle(){
        console.log(this.name+"'s color is "+this.color+".");
    }
}

const X = new unicorn("Rave","white");
X.sparkle();

//Encapsulation

class bankbalance{
    #balance;   // # makes the class private, hence anyone outsite the code change its varialble,
    // even if they want to
    //private variable
    constructor(inibal){   //constructor is use to set up initial value for an object
        this.#balance=inibal;
    }
    getbal(){
        return "Current Balance:"+this.#balance
    }
    deposit(amount){
        return "Current Balance:"+(this.#balance+=amount);
    }
    withdraw(amount){
        if (amount>this.#balance){
            return "Insufficient Balance"
        }
        else{
            return "Current Balance:"+(this.#balance-=amount);
        }
    }
}
const Y = new bankbalance(50000);
console.log(Y.getbal());
console.log(Y.deposit(10000));
console.log(Y.withdraw(20000));
console.log(Y.withdraw(100000));
Y.balance=10000;
console.log(Y.getbal());

//Abstraction

class coffee{
    #heatwater(){ //private method
        console.log("Heatin Water");
    }
    #brewcoffee(){
        console.log("Brewing Coffee");
    }

    makecoffee(){
        this.#heatwater();
        this.#brewcoffee();
        console.log("Coffee is readyy")
    }
}

const Z = new coffee();
Z.makecoffee();

//inheritance

class vehicles{
    constructor(make,model){
        this.make=make;
        this.model=model;
        }
        startengine(){
            console.log(this.make+"and"+this.model+"'s Engine Started");
    }
}

class cars extends vehicles{
    constructor(make,model,color){
        super(make,model);
        this.color=color;
    }
    startengine(){
        return (this.make+" and "+this.model+"'s Engine Started. Color is"+this.color);
    }
}

class bike extends vehicles{
    constructor(make,model,color,seats){
        super(make,model);
        this.color=color;
        this.seats=seats;
    }
    startengine(){
        return (this.make+" and "+this.model+"'s Engine Started. Color is"+this.color+"and"+
            this.seats+"seats."
        )
    }
}

const A = new cars("Axio",2014,"white");
const B = new bike("Pulsar",2019,"black",3);
console.log(A.startengine());
console.log(B.startengine());


//polymorphism--basically inheritance e jei function use kori different, oitai...
// same function doing different job




