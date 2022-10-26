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