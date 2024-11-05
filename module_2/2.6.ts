// Constraints in typescript


const addCourseToStudent = <T extends {
    name: string;
    age: number;
}>(student: T): T =>{
    const courses = ["Math", "English"];
    return {
        ...student, 
        courses
    }
}

const student1 = addCourseToStudent(<{
    name: string;
    age: number;
}>{
    name: "John",
    age: 30
})

const student2 = addCourseToStudent({
    name: "Jane",
    age: 28,
    hasWatchingMovie: true
})
