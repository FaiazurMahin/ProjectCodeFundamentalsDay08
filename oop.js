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
