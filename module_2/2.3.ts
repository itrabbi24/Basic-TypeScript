//  Introduction to generics

// Generics type

// type GenericArray<T> = Array<T>;

// type GenericArray<params> = Array<params>;

type GenericArray<T> = Array<T>;


// const rollNumber : number[] = [1,2,3,4];
// const rollNumber : Array<number> = [1,2,3,4];
const rollNumber : GenericArray<number> = [1,2,3,4];

// const mentors: string[] = ["John", "Doe", "Jane"];
// const mentors: Array<string> = ["John", "Doe", "Jane"];
const mentors: GenericArray<string> = ["John", "Doe", "Jane"];

// const boolArray : boolean[] = [true, false, true];
// const boolArray : Array<boolean> = [true, false, true];
const boolArray : GenericArray<boolean> = [true, false, true];


// generic object

const users : GenericArray<{name: string, age: number}> = [
{
    name: "John",
    age: 30
},
{
    name: "Jane",
    age: 28
}
];

// generic tupple

type GenericTuple<X, Y> = [X, Y];

const relation : GenericTuple<string, number> = ["John", 30];

const userWithId : GenericTuple<number, {name: string, age: number, id: number}> = [
    1234, 
    {
        name: "John",
        age: 30,
        id: 1
    }
];