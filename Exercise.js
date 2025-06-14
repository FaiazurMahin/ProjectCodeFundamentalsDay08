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
    woodstylejutsu

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
        if(manarequired>=this.#mana){
            return "Jutsu can't launch"
        }
        else{
            return "Fireball Jutsuuuuu"
        }
    }
}

const A = new character("Avenire", 100);
console.log(A.takedamage(50));


const B = new warrior("Imam",150);
console.log(B.name+" has "+B.health+" hp");
console.log(B.staminacheck())

const C = new mage("Deni",100);
console.log(C.name+" has "+C.mana+" mana."); //wont work anymore as its private now
console.log(C.manacheck());
console.log(C.firejutsu(50));
console.log(C.firejutsu(100));