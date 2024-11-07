{

// Abstraction in OOP

// 1. interface
// 2. abstract class
// 3. abstract method


// idea
interface Vehicle1{
    name: string;
    model: string;

    // abstract
    startEngie(): void;
    stopEngie(): void;
    move(): void;
}

// const vehicle1 : Vehicle1 = {
//     name: 'Car',
//     model: 'Model X'
// }


// read implementation
class Car implements Vehicle1{
    startEngie(): void {
        console.log("Car started");
    }

    stopEngie(): void {
        console.log("Car stopped");
    }

    move(): void {
        console.log("Car is moving");
    }
}
























}