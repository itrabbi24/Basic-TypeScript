{

    // Class and objects


    // class
    class Animal{
        // name: string;
        // species: string;
        // sound: string;

    //    public name: string;
    //    public species: string;
    //    public sound: string;

    // parameterized properties
    

        constructor(public name: string, public species: string, public sound: string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound(){
            console.log(`${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("Rex", "Canis familiaris", "Woof");
    const cat = new Animal("Meow", "Felis catus", "Meow");
    const bird = new Animal("Tweet", "Passer domesticus", "Tweet");

    dog.makeSound();
    cat.makeSound();






}