{
// Inheritance in OOP

// parent Class
class parentClass{
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
    constructor(name: string, age: number, gender: string, contactNo: string, address: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.contactNo = contactNo;
        this.address = address;
    }

    getSleep(numberOfHours: number) {
        console.log(`${this.name} is sleeping for ${numberOfHours} hours`);
    }
}




// Student
class Student extends parentClass {

    constructor(name: string, age: number, gender: string, contactNo: string, address: string) {
        super(name, age, gender, contactNo, address);
    }

}

const student1 = new Student("John", 30, "Male", "1234567890", "123 Main Street");


student1.getSleep(8);




// Teacher
class Teacher extends parentClass {
    constructor(name: string, age: number, gender: string, contactNo: string, address: string) {
        super(name, age, gender, contactNo, address);
    }

}

const Teacher1 = new Student("John Doe", 30, "Male", "1234567890", "123 Main Street");


Teacher1.getSleep(8);













}