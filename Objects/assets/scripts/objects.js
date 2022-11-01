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

const renderMovie = (movie = '') => {
    const movieList = document.getElementById('movie-list');
    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }

    const filterMovie = !movie ? movies.filter(movie => movie.info.title.includes(movie)) : movie;

    // Not good practice to clear the list and re-render it.
    // movieList.innerHTML = '';
    // movie.forEach((movie) => {
    //     const movieElement = document.createElement('li');
    //     movieElement.textContent = movie.info.title;
    //     movieList.append(movieElement);
    // });

    // This is a better way to render the list.
    const movieElement = document.createElement('li');
    let text = filterMovie.info.title + ' - ';

    // Dynamic property access loop.
    // This allows us to access any property of the movie object and display it, when we do not know it in advance.
    for (const key in filterMovie.info) {
        if (key !== 'title') {
            text = text + `${key}: ${filterMovie.info[key]}`;
        }
    }

    movieElement.textContent = text;
    movieList.append(movieElement);
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

    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }

    const newMovie = {
        info: {
            // If the key and value are the same, you can use the shorthand syntax.
            title,
            // Dynamic property name and value.
            [extraName]: extraValue
        },
        id: Math.random()
    };

    movies.push(newMovie);

    renderMovie(newMovie);
    clearFields();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovie(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);