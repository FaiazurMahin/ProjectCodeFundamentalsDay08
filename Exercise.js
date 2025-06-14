class character{
    constructor(name,health){
        this.name=name;
        this.health=health;
    }

    takedamage(damage){
        return (this.name)+" has "+(this.health-=damage)+" hp left";
    }
}

class warrior extends character{
    #stamina;
    constructor(name,health){
        super(name,health);
        this.#stamina=100;
    }
    takedamage(damage){
        return "Warrior has "+(this.health-=damage)+" hp left";
    
    }
    staminacheck(){
        return (this.name)+" has "+(this.#stamina)+" stamina left.";
    }
    woodstylejutsu(staminarequired){
        if(staminarequired>this.#stamina){
            return "Can't launch attack"
        }
        else{
            this.#stamina-=staminarequired;
            return "Attackkkk"
        }
    }

}

class mage extends character{
    #mana;
    constructor(name,health){
        super(name,health);
        this.#mana=100;
    }
    takedamage(damage){
        return "Mage has "+(this.health-=damage)+" hp left";
    
    }
    manacheck(){
        return (this.name)+" has "+(this.#mana)+" mana left.";
    }

    firejutsu(manarequired){
        if(manarequired>this.#mana){
            return "Jutsu can't launch"
        }
        else{
            this.#mana-=manarequired;
            return "Fireball Jutsuuuuu"
        }
    }
}

class Dragon extends character{
    constructor(name,health){
        super(name,health);
        this.attack="Breathe fire";
    }
    takedamage(damage){
        return  (this.name)+" has "+(this.health-=damage)+" hp left";
    }

    tatakaee(){
        return this.attack;
    }
}

class goblin extends character{
    constructor(name,health){
        super(name, health);
        this.attack="Throw rocks";
    }
    takedamage(damage){
        return  (this.name)+" has "+(this.health-=damage)+" hp left";
    }
    tatakaee(){
        return this.attack;
    }
}

class inventory{
    items=['Healingportions','BoostingAttack','Revive'];

    addItem(itemss){
        items.push(itemss);
    }
    removeItem(itemss){
        this.items.slice(itemss);
    }
    
}




const A = new character("Avenire", 100);
console.log(A.takedamage(50));


const B = new warrior("Imam",150);
console.log(B.name+" has "+B.health+" hp");
console.log(B.staminacheck())
console.log(B.woodstylejutsu(80));
console.log(B.woodstylejutsu(100));
console.log(B.staminacheck())
;
const C = new mage("Deni",100);
console.log(C.name+" has "+C.mana+" mana."); //wont work anymore as its private now
console.log(C.manacheck());
console.log(C.firejutsu(20));
console.log(C.firejutsu(100));
console.log(C.manacheck());


const D = new Dragon("Doragonn",100);
console.log(D.tatakaee());


const E = new goblin("Goblin", 100);
console.log(E.tatakaee());

const F =[D,E]
console.log(F);
F.forEach((enemy)=>console.log(enemy.tatakaee()));