// Objects are core data structures. 

// They typically reflect real-world objects, such as a player, 
// a monster, or an item. They are the primary way to store data.

// Obects are made up of properties and methods.

// Properties are variables that are attached to an object.
// Methods are functions that are attached to an object.

// Objects are created using the object literal notation.

// Quick Recap:
const person = {
    name: 'Edward',
    age: 49,
    hobbies: ['music', 'movies', 'games'],
    greet: function () {
        console.log('Hello there!');
    }
};

// The above object has 4 properties:
// name, age, hobbies, and greet.

// The greet property is a method.

// The greet method is a function that is attached to the person object.

// The greet method can be called using the following syntax:
person.greet();

// Adding, Modifying, and Deleting Properties

// If you want to add a property to an object, you can do so using the following syntax as an example:
person.isAdmin = true;

console.log(person.isAdmin);

// This is how you modify a property and add a function to the person object:
person.sayHi = function () {
    console.log('Hi there!');
};

person.sayHi();

console.log(person);

// To remove an property from an object, you can use the delete keyword:
delete person.age;

console.log(person);

// To modify a property, you can simply reassign it:
person.greet = function () {
    console.log('Hello there 124!');
};

person.greet();

// It is important to understan the difference between null and undefined.
// null is an intentional absence of any value.
// undefined is a variable that has not been assigned a value.

// The following code will return undefined, because we have deleted the age property:
console.log(person.age);

// The following code will return null, because we have explicitly set the age property to null:
person.age = null;
console.log(person.age);

// 217. Special Key Names & Square Bracket Property Access

// Keys can be any string, including an empty string.
const person1 = {
    'full name': 'Edward',
    age: 49,
    hobbies: ['music', 'movies', 'games'],
    greet: function () {
        console.log('Hello there!');
    }
};

// To access a property with a special key name, you can use the following syntax (the square brackets):
console.log(person1['full name']);

// If you want to access any property, even if it is a special key name, you can use the following syntax:
console.log(person1['age']);

// 218. Property Types & Property Order

const person2 = {
    'full name': 'Edward',
    age: 49,
    hobbies: ['music', 'movies', 'games'],
    greet: function () {
        console.log('Hello there!');
    },
    1.5: 'hello'
};

// JavaScript will convert the number 1.5 to a string, even though it is defined as a number.
console.log(person2[1.5]);
console.log(person2['1.5']);

// Order of properties in an object.
console.log(person2);

// 219. Dynamic Property Access & Setting Properties Dynamically

// Setting properties dynamically.
// To set the const, remove the comments and include the prompt.
const userChosenKeyName = ''; //prompt('What do you want to know about the person? Choose between name, age, and hobbies.');

const person3 = {
    'full name': 'Edward',
    age: 49,
    hobbies: ['music', 'movies', 'games'],
    // Based on the user's input, we will return the value of the property, but set the key name dynamically.
    [userChosenKeyName]: 'hello',
    greet: function () {
        console.log('Hello there!');
    },
    1.5: 'hello'
};
const keyName = 'full name';
console.log(person3[keyName]);

// This can be used to set properties dynamically.
const keyName2 = 'age';
person3[keyName2] = 50;
console.log(person3);

// This will access the dynamic property that we set above.
console.log(person3[userChosenKeyName]);

// Quiz test: You can also reference the value of the variable to access the property of an object.
const propKey = 'field 12';
const persontest = {
    [propKey]: 'Edward'
};
console.log(persontest['field 12']);

// 220. Shorthand syntax

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

let movies = [];

const renderMovies = (movie = '') => {
    const movieList = document.getElementById('movie-list');
    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }

    const filteredMovies = !movie ? movies : movies.filter((movieItem) => movieItem.info.title.includes(movie));

    // I do not like this solution, but it works instead of looping through all objects again and then rendering them again.
    movieList.innerHTML = '';

    if (movie !== '') {
        filteredMovies.forEach(movie => {            
            const movieElement = document.createElement('li');

            // Object destructuring.
            // Object destructing basically extracts the values from an object and stores them in variables.
            // It is important to note that the variable names must match the property names. 
            // If you want to use a different name, you can use the following syntax:
            // const { title: movieTitle } = movie.info;
            // If you want to extract other properties, you can use the following syntax:
            const { info, ...otherProperties } = movie;
            console.log(otherProperties);

            // Object destructuring on destructed object.
            const { title: movieTitle } = info;

            let text = movieTitle + ' - ';

            for (const key in info) {
                if (key !== 'title') {
                    text = text + `${key}: ${info[key]}`;
                }
            }
            
            movieElement.textContent = text;
            movieList.append(movieElement);
        });
        movie = '';
    } else {
        movies.forEach(movie => {
            const movieElement = document.createElement('li');

            // Checking for property existence.
            if ('info' in movie) {
                console.log(movie.info.title);
            }
            if (movie.info === undefined) { 
                return;
            }

            // Object destructuring.
            // Object destructing basically extracts the values from an object and stores them in variables.
            // It is important to note that the variable names must match the property names. 
            // If you want to use a different name, you can use the following syntax:
            // const { title: movieTitle } = movie.info;
            // If you want to extract other properties, you can use the following syntax:
            const { info, ...otherProperties } = movie;
            console.log(otherProperties);

            // Object destructuring on destructed object.
            const { title: movieTitle } = info;

            const { getFormattedTitle } = movie;
            const { getFormattedExtraName } = movie;
            // const { getFormattedExtraValue } = movie;   // NOT WORKING AS EXPECTED.

            console.log(getFormattedTitle.call(movie));

            // let text = movieTitle + ' - ';
            let text = getFormattedTitle.call(movie) + ' - ';

            // You can also use the function call to get access to unknown properties.
            let extraName = getFormattedExtraName.call(movie);

            // You can use 'apply' to get the function to execute and pass in an array of arguments.
            // Unlike call, you pass a comma separated list of arguments.
            // let extraValue = getFormattedExtraValue.apply(movie, ['director']);  // NOT WORKING AS EXPECTED.

            for (const key in info) {
                if (key !== 'title' &&
                // The _title refers to the getter/setter property below and also prevents the property from being rendered.
                key !== '_title') {
                    text = text + `${extraName}: ${info[key]}`;
                    // text = text + `${extraName}: ${extraValue}`;
                }
            }

            movieElement.textContent = text;
            movieList.append(movieElement);
        });
    }
};

const clearFields = () => {
    const titleInput = document.getElementById('title');
    const extraNameInput = document.getElementById('extra-name');
    const extraValueInput = document.getElementById('extra-value');

    titleInput.value = '';
    extraNameInput.value = '';
    extraValueInput.value = '';
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }

    const newMovie = {
        info: {
            // If the key and value are the same, you can use the shorthand syntax.
            get title() {
                return this._title;
            },
            set title(value) {
                if (value.trim() === '') {
                    this._title = 'DEFAULT';
                    return;
                }
                this._title = value;
            },
            // Dynamic property name and value.
            [extraName]: extraValue
        },
        id: Math.random(),
        // The 'this' keyword
        // Do not use the arrow function here, because the function will not have access to the 'this' keyword.
        getFormattedTitle: function () {
            return this.info.title.toUpperCase();
        },
        getFormattedExtraName() {
            return this.info[extraName].toUpperCase();
        },
        // NOT WORKING AS EXPECTED.
        // You can also pass arguments to the function.
        getExtraValue(director) {
            console.log(director); // WORKS
            console.log(this.info[extraValue]); // WORKS
            return this.info[extraValue]; // DOES NOT WORK RETURNING UNDEFINED
        }
    };

    // You assign/set the getter/setter function by using the following syntax.
    newMovie.info.title = title;
    console.log(newMovie.info.title);

    movies.push(newMovie);

    renderMovies();
    clearFields();
};

// When you use the arrow function, the 'this' keyword will not work. It will instead refer to the global object.
const searchMovieHandler = () => {
    console.log(this);  // This will write 'Window' to the console.

    const filterTerm = document.getElementById('filter-title').value;
    // const newMoviewFilter = {
    //     info: {
    //         title: filterTerm
    //     }
    // };
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

// Example of the spread operator.
const personSpreadOperator = {
    name: 'Edward',
    age: 49,
    hobbies: ['music', 'movies', 'games']
};

personSpreadOperator.hobbies.push('coding');

// This is the spread operator. What is does is make a copy of the person object.
// What is important to note is that it does not create a deep copy, but a shallow copy.
// This means that if you have an array inside of an object, it will not create a copy of the array, but a reference to the array.
const copiedPerson = { ...personSpreadOperator };

console.log(copiedPerson);

// The age will be overwritten in the copiedPerson object.
// Using the spread operator, we can make a clone of an array from an object.
const personCopies = { ...copiedPerson, age: 50, hobbies: [...copiedPerson.hobbies] };
console.log(personCopies);

// Object.assign() is another way to copy an object.
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. 
// Returns the target object.
const nameofPerson = { name: 'Edward', hobbies: ['music', 'movies', 'games'] };
const assignOfPerson = Object.assign({}, nameofPerson);
console.log(assignOfPerson);

// Arrow functions within objects.
const member = {
    team: 'Manchester United',
    members: ['Ronaldo', 'Messi', 'Neymar'],
    getTeamWithMembers() {
        console.log(this.members.map(member => `${member} is on the ${this.team} team.`));
        this.members.forEach(member => {
            console.log(`${member} is on the ${this.team}`);
        });
    }   
};
member.getTeamWithMembers();