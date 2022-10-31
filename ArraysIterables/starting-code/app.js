// Square bracket notation array is the most common way to create an array.
// This may be better than the new Array() syntax.
// It is important to remember that arrays are indexed based.
const numbers = [1, 2, 3];
console.log(numbers);

// If you pass a single number as a parameter to the Array constructor, it will create an array with that many empty slots.
const moreNumbers = new Array(3);
console.log(moreNumbers);

// If you pass multiple parameters to the Array constructor, it will create an array with those values.
const evenMoreNumbers = new Array(3, 2);
console.log(evenMoreNumbers);

// This is the same as above, but it is text.
const characters = new Array('Hello', 'Edward', 'How are you?');
console.log(characters);

// You can instantiate an array withou the new keyword.
const noNewKeyword = Array(1, 2, 3);
console.log(noNewKeyword);

// This will be slower than using square bracket notation.
const yetMoreNumbers = Array.of(1, 2, 3);
console.log(yetMoreNumbers);

// When using Array.from, you must pass an iterable (aarray like object) as the first parameter.
// This method is great to split a string into an array of characters for example.
const arrayFrom = Array.from('Hello');
console.log(arrayFrom);

const listItems = document.querySelectorAll('li');
const arrayFromListItems = Array.from(listItems);
console.log(arrayFromListItems);

// Arrays can be of any type for example uniform or heterogeneous.
const heterogeneousArray = [1, 'Hello', { name: 'Edward' }];
console.log(heterogeneousArray);

// You can also have nested arrays.
// This is a 2D array and can also be heterogeneous.
const nestedArray = [[1, 2, 3], [4, 5, 6]];
console.log(nestedArray);
for (const top of nestedArray) {
    for (const bottom of top) {
        console.log(bottom);
    }
}

// Add data to an array.
const hobbies = ['Sports', 'Cooking'];
// Adds elements to the end of the array. Returns the new length of the array.
hobbies.push('Reading');

// Adds elements to the beginning of the array. Returns the new length of the array. Moves all other elements to the right.
// This is slower than push.
hobbies.unshift('Coding');

// Removes the last element from the array. Returns the removed element as a result if you want to use it for some reason.
const removedValue = hobbies.pop();
console.log(`I am the removed value: ${removedValue}`);

// Removes the element from the array, by moving all elements to the left. Returns the removed element as a result if you want to use it for some reason.
// This is slower than pop.
const removedValue2 = hobbies.shift();
console.log(`I am the removed value: ${removedValue2}`);

// This replaced the element at index 1 with the new value.
hobbies[1] = 'Coding';

// This will add a new element at index 5 and there will be empty slots in between.
// This is rarely used and is not recommended.
hobbies[5] = 'Reading';

console.log(`This is an example of an empty slot in the array: ${hobbies[4]}`)

// Splice is a very powerful method that can be used to add, remove, or replace elements in an array.
hobbies.splice(1, 0, 'Good Food');

// This will remove the element at index 0.
hobbies.splice(0, 1);

// This will delete everything from the array.
// This also returns the removed elements as a result if you want to use it for some reason.
hobbies.splice(0, hobbies.length);

console.log(`Because of the above, splice has removed everything in the array and this should then be empty: ${hobbies}`);

hobbies.push('Sports', 'Cooking');

// This will add and element from the right of the array with the new value.
hobbies.splice(-1, 0, 'Good Food');

console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// This will return elements from index 0 to index 2.
const storedResults = testResults.slice(0, 3);
const storedResults2 = testResults.slice(-3, -1);
const storedResults3 = testResults.slice(2);

// This will return a new array with the elements sorted in ascending order.
const sortedResults = testResults.slice().sort();

console.log(testResults, storedResults, storedResults2, storedResults3, sortedResults);

// This will add new elements to the array and make a copy of the array, therefore adding a new array to memory.
const concatResults = testResults.concat([3.99, 2]);

console.log(concatResults);

// The indexOf method will return the index of the first element that matches the value passed in.
// If the value is not found, it will return -1.
// If there are multiple elements that match the value, it will return the index of the first one.
const indexOfItemInArray = [1, 5.3, 1.5, 10.99, -5, 10].indexOf(1.5);
console.log(indexOfItemInArray);

// The lastIndexOf method will return the index of the last element that matches the value passed in, from the right.
const lastIndexOfItemInArray = [1, 5.3, 1.5, 10.99, -5, 10].lastIndexOf(5.3);
console.log(lastIndexOfItemInArray);

const personData = [{ name: 'Edward' }, { name: 'John' }];
// indexOf will not work with objects and will return -1, which means it is not found.
console.log(personData.indexOf({ name: 'Edward' }));

// This can be used for any type of data.
// This will return the index of the first element that matches the value.
// find does not return a new array, it returns the element itself.
const findEdward = personData.find((person, index, persons) => {
    return person.name === 'Edward';
});
console.log(findEdward);

// This will return the index of the first element that matches the value.
const edwardIndex = personData.findIndex((person, index, persons) => {
    return person.name === 'Edward';
});
console.log(edwardIndex);

// includes will only work with primitive types.
const testIncludes = testResults.includes(1.5);
console.log(testIncludes);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// This is a for loop.
for (const price of prices) {
    taxAdjustedPrices.push(price * (1 + tax));
}
console.log(taxAdjustedPrices);

// This is a for loop with an index.    
for (const [index, price] of prices.entries()) {
    const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
    taxAdjustedPrices.push(priceObj);
}
console.log(taxAdjustedPrices);

// This is a forEach loop.
prices.forEach((price, index, prices) => {
    const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
    taxAdjustedPrices.push(priceObj);
});
console.log(taxAdjustedPrices);

// Transforming data with map.
// This is a map loop.
const taxAdjustedPrices2 = prices.map((price, index, prices) => {
    const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
    return priceObj;
});
console.log(taxAdjustedPrices2);

// Sort on its own converts the values to strings and sorts them alphabetically and in this example, 
// it will sort the prices in ascending order.
const sortedPrices = prices.sort();
console.log(sortedPrices);

// This will sort the prices in descending order.
const ascSortedPrices = prices.sort((a, b) => {
    // If you want to reverse the results, you can change the return values as below.
    // Then you don't need to use the reverse function as outlined in the console.log below.
    // if (a > b) {
    //     return -1;  
    // } else if (a === b) {
    //     return 0;
    // } else {
    //     return 1;
    // }

    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log(ascSortedPrices);
// The reverse function will reverse the order of the elements in the array.
console.log(ascSortedPrices.reverse());

const filteredArray = prices.filter((price, index, prices) => {
    // console.log(price);
    // console.log(index);
    // console.log(prices);
    return price > 6; // Must return a boolean, so this will return all prices that are greater than 6.
});
console.log(filteredArray);

// This will return the same as the method above, but with much less code, because of the arrow function.
const arrowFunctionShines = prices.filter(price => price > 6);
console.log(arrowFunctionShines);

// The reduce method is one of the methods that you must know.
// It is used to reduce an array to a single value.
// It takes a function as an argument and that function will be executed on every element in the array.
let sum = 0;
prices.forEach((price) => {
    sum += price;
});
console.log(sum);

// This is the same as the forEach loop above, but with the reduce method.
// const sum2 = prices.reduce((prevValue, curValue, curIndex, prices) => {
//     return prevValue + curValue;
// }, 0);
// This is shorter than the reduce method above.
// The 0 at the end of the reduce method below is the initial value and can be any number.
// It is basically the same as saying let sum = 0 as shown in the forEach loop above.
const sum2 = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log(sum2);

// Chaining Methods in JavaScript
// With all these useful array methods you learned about, it's important to understand how you can combine them. 
// Let's take map() and reduce() as an example:

const originalArray1 = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const transformedArray = originalArray1.map(obj => obj.price); // produces [10.99, 5.99, 29.99]
const sum1 = transformedArray.reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97

// Of course, you could skip the map step and just add the extraction logic to reduce():

const originalArray2 = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const sum3 = originalArray2.reduce((sumVal, curVal) => sumVal + curVal.price, 0); // => 46.97

// But let's say you have a more complex extraction logic and hence want to split this into multiple method calls. 
// Or you have a re-usable map function which you want to be able to use in different places of your app. 
// Then you can still write the initial example in a more concise way if you leverage method chaining:

const originalArray3 = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const sum4 = originalArray3.map(obj => obj.price)
    .reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97

// We call .reduce() directly on the result of map() (which produces an array, that's why this is possible). 
// Hence we can avoid storing the mapped array in a separate constant or variable that we might not need in any 
// other place.

const data = 'new york;10.99;2000';
// This will return an array with the following values:
// [ 'new york', '10.99', '2000' ]
console.log(data.split(';'));

const transformedData = data.split(';');
// This will convert element 1 in the array to a number.
transformedData[1] = +transformedData[1];
console.log(transformedData);

const changeFormat = data.split(';');
changeFormat.map((value, index) => {
    if (index === 0) {
        const convertedData = { city: changeFormat[index], price: +changeFormat[index + 1], year: +changeFormat[index + 2] };
        console.log(convertedData);
    }
});

// Array Join
// This will return an array that has been joined/merged.
const nameFragment = ['Edward', 'Whitehead'];
console.log(nameFragment.join(' '));

// Array Spread Operator
// The spread operator is used to copy an array, for example the above array, is copied below.
const spreadOperator = [...nameFragment, 'Mr'];
console.log(nameFragment, spreadOperator);

//  Another example of the spread operator.
console.log(Math.min(...prices));

const persons = [{ name: 'Edward', age: 49, hobbies: ['Coding', 'Cycling'] }, { name: 'Jason', age: 1, hobbies: [] }];
// Using map will create a new object of the persons array.
// It is important to remember that when copying nested elements, you must use the spread operator 
// to copy the nested elements as well but try and avoid infinite loops.
const copiedPersons = [...persons.map(person => ({ name: person.name, age: person.age, hobbies: [...person.hobbies] }))];
console.log(persons, copiedPersons);

// Array Destructuring
// This is a way to extract elements from an array and store them in variables.
// This will extract the first two elements from the array and store them in the variables below.
const [firstName, lastName] = nameFragment;
console.log(firstName, lastName);

const newNameFragment = ['Edward', 'Whitehead', 'Mr', 30];
// This will extract the first two elements from the array and store them in the variables and then the remaining items
// will be stored in the 'others' variable.
// The '...' is the rest operator.
// Elements are extracted from left to right.
const [firstName1, lastName1, ...others] = newNameFragment;
console.log(firstName1, lastName1, others);

// Arrays
// Stores nested data of any type and length.
// Arrays are iterable.
// Order is guaranteed, duplicates are allowed and elements are zero-indexed.

// Maps & Sets

// Maps
// Maps stored key-value pairs of any kind and any key values are allowed.
// Maps are iterable.
// Order is guaranteed, duplicate keys are not allowed and elements are zero-indexed.
// Maps can be used to store some complex data structures.
const user = { name: 'Edward' };
const visits = { visits: 10 };

// const somePersonData = new Map([[user, visits]]);
const somePersonData  = new Map([[0, user], [1, visits], [2, 'Some String']]);
somePersonData.set(0, [{date: 'today', time: 'now'}]);

// console.log(somePersonData);
console.log(somePersonData.get(user));

for (const entry of somePersonData.entries()) {
    console.log(entry);
}

// Another way of gettiing key/value pairs from a map instead of using 'entry' like above.
for (const [key, value] of somePersonData.entries()) {
    console.log(key, value);
}

// To just get the keys from a map
for (const key of somePersonData.keys()) {
    console.log(key);
}

// To just get the values from a map
for (const value of somePersonData.values()) {
    console.log(value);
}

// Sets
// Sets store unique values of any type.
// Sets are iterable.
// Order is not guaranteed, duplicates are not allowed and elements are not zero-indexed.
// Theoretically, you will not necessarily use Sets to store data, but rather to check if a value is in a set or not.
// Sets are great if you want unique values in an array.
const ids = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
ids.add(6);
ids.delete(2);

// Returns true if the value is in the set.
console.log(ids.has(1));

// returns an iterator of arrays with the key and value.
const entriesValues = ids.entries();
for (const entry of entriesValues) {
    console.log(entry);
}

// returns an iterator of the values.
const values = ids.values();
for (const value of values) {
    console.log(value);
}

// Maps vs Objects
// Maps are iterable, objects are not.
// Maps can use any values (and types) as keys, objects can only use strings, numbers or symbols.
// Maps have better performance for large sets of data, objects have better performance for small sets of data.
// Maps perform better when adding or removing data, objects perform quicker to create.
// 98% of the time you will use Maps and Objects and not Sets because Sets are best for unique values.

// WeakMaps & WeakSets
// WeakMaps and WeakSets are similar to Maps and Sets but they have some differences, more importantly though,
// they are cleared from memory when they are not used anymore, via the garbage collector.

// WeakMaps
let key = { id: 1 };
const _anotherPersonsData = new WeakMap();
_anotherPersonsData.set(key, { name: 'Edward' });

// ... some code here

// This will clear key from memory, via the garbage collector.
key = null;

console.log(_anotherPersonsData);

// WeakSets
// WeakSets create an opportunity to remove items from memory (person below) when they are no longer needed
// and are not referenced anywhere else in the code.
let person = { name: 'Edward' };
const _persons = new WeakSet();
_persons.add(person);

//... some code

// This will clear person from memory, via the garbage collector.
person = null; 

console.log(_persons);