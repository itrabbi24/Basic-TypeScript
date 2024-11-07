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




class Shape{
    getArea(): number{
        return 0;
    }
}


// Pi * radius * radius
class Circle extends Shape{
    radius : number;

    constructor(radius: number){
        super();
        this.radius = radius;
    }

    getArea(): number{
        return Math.PI * this.radius * this.radius;
    }
}


// height * weight
class Rectangle extends Shape{
   height : number;
   width : number;

    constructor(height: number, width: number){
        super();
        this.height = height;
        this.width = width;
    }

    getArea(): number{
        return this.height * this.width;
    }
}


const getShapeArea = (param: Shape)=>{
    console.log(param.getArea());
}

getShapeArea(new Circle(10));
getShapeArea(new Rectangle(10, 20));


const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);

getShapeArea(shape1);
getShapeArea(shape2);
getShapeArea(shape3);

















}