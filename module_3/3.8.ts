// Polymorphism
{

// --------------------------


class Person {
    getSleep(){
        console.log("I am sleeping 8 hours a day");
    }
}


class Student extends Person {
    getSleep(){
        console.log(`I am sleeping for 7 hours`);
    }
}



    class Developer extends Person {
        getSleep(){
            console.log(`I am sleeping for 6 hours`);
        }
    }


    const getSleepingHour = (param: Person)=>{
        param.getSleep(); 
    }

    const person = new Person();
    person.getSleep();

    const student = new Student();
    student.getSleep();

    const developer = new Developer();
    developer.getSleep();


getSleepingHour(person);
getSleepingHour(student);
getSleepingHour(developer);



















}