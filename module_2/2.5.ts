{
// // Function with generics


const createArray = (param: string) : string[] =>{
    return [param];
}

const createArrayWithGeneric = <T>(param: T): T[] =>{
    return [param];
}



const res1 = createArray("John");

const res2 = createArrayWithGeneric<string>("John");

type User = {
    id: number; 
    name: string
}

const res3 = createArrayWithGeneric<User>({id: 222, name: "John"});










const createArrayWithTupple = <T, Q>(param1: T, param2: Q): [T, Q] =>{
    return [param1, param2];
}


const res4 = createArrayWithTupple<string, number>("John", 1);






const addCourseToStudent = <T>(student: T): T =>{
    const courses = ["Math", "English"];
    return {
        ...student, 
        courses
    }
}

const student1 = addCourseToStudent({
    name: "John",
    age: 30
})

const student2 = addCourseToStudent({
    name: "Jane",
    age: 28,
    hasWatchingMovie: true
})
















// 
}