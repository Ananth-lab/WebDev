
//1. This in global scope

this.table = "I am in global";

this.book = {

    page : "Page 28"

}

console.log(this.book.page)

console.log(this.table)



//2.This inside an Object

let JohnsRoom = {

    table : "Johns Table"

}

console.log(JohnsRoom.table)



//3.this inside a method

let JohnsRoom = {

    table : "Johns table",

    cleanTable(){

        console.log(`Cleaning ${this.table}`)

    }

}

JohnsRoom.cleanTable()



//4.this inside a function

this.table = "window table";

const cleanTable = function(){

    console.log(`Cleaning ${this.table}`)

}

cleanTable.call(this)



//5.this inside an inner function

this.table = "Window table";

const cleanTable = function() {

    const innerFunction = () => {

        console.log(`Cleaning ${this.table}`)

    }

    innerFunction()

}

cleanTable.call(this)



//6.this inside a constructor

let createRoom =  function(name){

    this.table = `${name}s table`

}

createRoom.prototype.cleanTable = function(){

    console.log(`Cleaning ${this.table}`)

}

const Ram = new createRoom("ram")

Ram.cleanTable()

const Shyam = new createRoom("shyam")

Shyam.cleanTable()



//7.this inside a class

class member{

    constructor(name){

        this.name = name

    }

    prints(){

        console.log(`${this.name} is a member now!`)

    }

}

let obj = new member("Gawreesh")

obj.prints()




//Fat arrow functions

let square = (a) =>{
    return a * a;
} 
console.log(square(8))

//If we are not passing any arguments
let a = 6;
let mult = () => {
    return 8*a;
}

console.log(mult())

//using fat arrow function inside a function

let x = function(){
    this.value = 1;
    setTimeout(() => {
        this.value++;
        console.log(this.value)
    }, 100)
}

let y = new x()



let count = 0;

class Student{

    constructor(name,age,phone,marks){

        this.name = name;

        this.age = age;

        this.phone = phone;

        this.marks = marks;

        count += 1;

    }



    // checkEligibility(){

    //     (this.marks > 40) ? console.log(`${this.name} is eligible` ): console.log(`${this.name} is not eligible`)

    // }

     checkEligibility = (minmarks) => {
        return (this.marks > minmarks)
    }



    countit(){

        console.log(`Current number of enrollment is ${count}`)

    }

}



let Ram = new Student("Ram", 23, 6767658392, 56);
console.log(Ram.checkEligibility(10))
let Shyam = new Student("Shyam", 27, 6547658392, 51)
console.log(Shyam.checkEligibility(10))
let Sachin = new Student("Sachin", 13, 67676492, 23)
console.log(Sachin.checkEligibility(10))
let Ganesh = new Student("Ganesh", 65, 6557658392, 89)
console.log(Ganesh.checkEligibility(10))
let virat = new Student("virat", 63, 8767658392, 11)
console.log(virat.checkEligibility(10))



virat.countit()