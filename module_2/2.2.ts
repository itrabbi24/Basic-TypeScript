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