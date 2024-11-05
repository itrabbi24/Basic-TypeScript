{
// Utility types

// Pick

type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
}

type nameAge = Pick<Person, "name" | "age">


// Omit

type contactInfo = Omit<Person, "name" | "age">

// required

type PersonRequired = Required<Person>

// partial

type PersonPartial = Partial<Person>

// type PersonPartial = {
//     name?: string | undefined;
//     age?: number | undefined;
//     email?: string | undefined;
//     contactNo?: string | undefined;
// }

// readonly

type PersonReadonly = Readonly<Person>

// type PersonReadonly = {
//     readonly name: string;
//     readonly age: number;
//     readonly email?: string | undefined;
//     readonly contactNo: string;
// }

// record type

type User = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
}

type UserRecord = Record<string, User>

type UserRecord1 = Record<string, unknown>

// empty Obj

const EmptyObj : {} = {} 



// 
}