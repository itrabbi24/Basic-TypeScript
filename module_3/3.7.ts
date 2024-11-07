// Statics in OOP
{

// Dynamic
// class Counter{
//     count: number = 0;
//     increment(){
//        return this.count = this.count + 1;
//     }

//     decrement(){
//         return this.count = this.count - 1;
//     }
// }


// Static
class Counter{
   static count: number = 0;
   static increment(){
       return Counter.count = Counter.count + 1;
    }

   static decrement(){
        return Counter.count = Counter.count - 1;
    }
}

// const instant1 = new Counter();

console.log(Counter.increment());

const instant2 =  new Counter();
console.log(Counter.decrement());


























}