// Classic class.
class Person {
    name = 'Edward';

    constructor() {
        this.age = 49;
    }

    greet() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}
const person = new Person();
person.greet();

// This is a constructor function and is commonly used in JavaScript.
// This works the same as the class above, but classes do more and the function below is more verbose.
function ConstructorPerson() {
    this.name = 'Edward';
    this.age = 49;
    this.greet = function() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}
const constructorPerson = new ConstructorPerson();
constructorPerson.greet();