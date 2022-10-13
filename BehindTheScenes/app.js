'use strict';

function getName() {
    return prompt('What is your name?');
}

function sayHello() {
    const userName = getName();
    console.log('Hello ' + userName);
}

sayHello();


let userName = 'Ed';

// Vars exist in the global and function scope.

// Important difference between var and let is that let is concerned about what is contained within the block 
// of code it is declared in. Therefore, if it was declared in an if statement, it would not be accessible elsewhere.

// Var is globally scoped, which means that it can in theory be accessed from anywhere in the application.

// let and const forces to write cleaner code and it is better to use these instead of var.

if (userName === 'Ed') {
    var hobbies = ['Sports', 'Cooking'];
    console.log(hobbies);
}

function greet() {
    // A var created within a function can be used anywhere within the function.
    var age = 30;
    console.log('Hello ' + userName, age);

    // The var hobbies declared in the if statement can be accessed here within the function.
    console.log(hobbies);
}

// The var hobbies declared in the if statement can be accessed here within the function.
console.log(hobbies);

greet();

// This will generate an error because age is not accessible outside of the function.
// console.log(age);

function myStrictFunction() {
    // Function-level strict mode syntax
    'use strict';
    function nested() {
        return 'And so am I!';
    }
    return `Hi! I'm a strict mode function! ${nested()}`;
}
console.log(myStrictFunction());

function myNotStrictFunction() {
    return "I'm not strict.";
}

console.log(myNotStrictFunction());