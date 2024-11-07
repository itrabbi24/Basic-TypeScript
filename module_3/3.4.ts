{ 
// Type guard using instance of



class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = 'mammal';
    }

    makeSound(){
        console.log(`I am making a sound`);
    }
}


class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeBrack(){
        console.log(`I am bracking a sound`);
    }
}



class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }

    makeMeaw(){
        console.log(`I am Meawing a sound`);
    }
}

const isDog = (animal: Animal) : animal is Dog =>{
    return animal instanceof Dog;
}

const isCat  = (animal: Animal) : animal is Cat=>{
    return animal instanceof Cat;
}


const getAnimals = (animal: Animal) => {
    // if (animal instanceof Dog) {
    if (isDog(animal)) {
        animal.makeBrack();
    // } else if (animal instanceof Cat) {
    } else if (isCat(animal)) {
        animal.makeMeaw();
    }else{
        animal.makeSound();
    }
}

const dog = new Dog("Rex", "Canis familiaris");
const cat = new Cat("Meow", "Felis catus");






















}