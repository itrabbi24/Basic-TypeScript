// Interface, type vs interface

// Interface
interface Person {
    name: string;
    age: number;
}    

// Type
type Person2 = {
    name: string;
    age: number;
}



//

const user : Person = {
    name: "John",
    age: 30
}


// extends

interface Person3 extends Person {
    gender: string;
}

const user2 : Person3 = {
    name: "John",
    age: 30,
    gender: "Male"
}



type Roll = number[];

interface Roll2{
    [index: number]: number
}

const roleNumber1: Roll2 = [1,2,3];



type Add1 = (num1: number, num2: number) => number;

interface Add2{
    (num1: number, num2: number): number
}

const add : Add2 = (num1, num2) => num1+ num2;