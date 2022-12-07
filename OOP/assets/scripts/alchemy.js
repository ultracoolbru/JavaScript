// class NewPerson {
//     name = 'Ed';
// }

// const p = new NewPerson();

// // instanceof = The instanceof operator in JavaScript is used to check the type of an object at run time.
// if (p instanceof NewPerson) {
//     console.log(p instanceof NewPerson);
// }


// function isEven(n) {
//     if(n % 2 === 0) return true;
//     return false;
// }

// console.log(isEven(6));

// function maxSum(num) {
//     let sum = 0;
//     for(let i = 1; i <= num; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(maxSum(5));

// function startsWith(string) {
//     if (string.startsWith('a')) return true;
//     return false;
// }

// console.log(startsWith('Apple'));

// function endsWith(string) {
//     if (string.endsWith('a')) return true;
//     return false;
// }

// console.log(endsWith('Apple'));

// function splitAtX(string) {
//     const positionOfX = string.indexOf('x');
//     const firstHalf = string.slice(0, positionOfX);
//     const secondHalf = string.slice(positionOfX + 1);

//     if (firstHalf.length > secondHalf.length) return firstHalf;
//     return secondHalf;
// }

// console.log(splitAtX('before the x is shorter than after'));

// function hasOne(array) {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element === 1) return true;
//     }
//     return false;
// }

// console.log(hasOne([1, 6,7,8,9,10,11]));

// function sumEven(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element % 2 === 0) sum += element;
//     }
//     return sum;
// }

// console.log(sumEven([1, 2, 3, 4, 5]));

// function unique(array) {
//     const uniqueArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (!uniqueArray.includes(element)) uniqueArray.push(element);
//     }
//     return uniqueArray;
// }

// console.log(unique([1, 1, 1, 1, 1, 1, 1]));

// function addOne(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i] + 1;
//         console.log(array[i]);
//     }
// }
// addOne([1]);

function removeOccurrences(array, num) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i] == num) {
            array.splice(i, 1);
            i--;
        }
    }
    console.log(array);

    // for (let i = array.length - 1; i >= 0; i--) {
    //     if (array[i] == num) array.splice(i, 1);
    // }
    // console.log(array);
}
removeOccurrences([1, 2, 2, 3, 4, 3], 2);

// const orders = [
//     { pizzas: 3 },
//     { pizzas: 5 },
//     { pizzas: 10 },
// ];

// function numberOfPizzas(orders) {
//     let result = 0;
//     orders.forEach(pizza => {
//         result += pizza.pizzas;
//     });
//     return result;
// }

// numberOfPizzas(orders);

const ORDER_TYPES = {
    PIZZA: 0,
    DOUBLE_WHOPPER_PIZZA: 1,
    EXTRA_CHEESY_PIZZA: 3
}
const orders = [
    { pizzas: 3, type: ORDER_TYPES.PIZZA, extraCheese: true },
    { pizzas: 5, type: ORDER_TYPES.PIZZA, extraCheese: false },
    { pizzas: 10, type: ORDER_TYPES.PIZZA, extraCheese: true },
];
function numberOfPizzas(orders) {
    let result = 0;
    orders.forEach(pizza => {
        if (pizza.type === ORDER_TYPES.PIZZA) result += pizza.pizzas;
    });
    return result;
}
numberOfPizzas(orders);

function numberOfKeys(object) {
    let i = 0;
    for (let key in object) {
        if (Object.keys(key)) i++;
    }
    return i;
}
numberOfKeys({ a: 1, b: 2, c: 3 });

function halfValue(numbers) {
    let result = [];
    if (numbers.length === 0) return [];
    for (let i = 0; i < numbers.length; i++) {
        let value = 0;
        if (numbers[i] % 2 !== 0) result.push((numbers[i] + 1) / 2);
        if (numbers[i] % 2 === 0) result.push(numbers[i] / 2);
        //     value = (numbers[i] + 1) / 2
        //     result.push(value);
        // } else {
        //     value = numbers[i] / 2;
        //     result.push(value);
        // }
    }
    return result;
}
console.log(halfValue([11, 13, 15, 17]));

function countC(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'c' || str[i] === 'C') count++;
    }
    return count;   
}
console.log(countC('Circus'));

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u') count++;
    }
    return count;
}
console.log(countVowels('Igloo'));

function reverse(string) {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) result += string[i];
    return result;   
}
console.log(reverse('Hello'));

function isPalindrome(string) {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) result += string[i];
    if (result === string) return true;
    return false;
}
console.log(isPalindrome('racecar'));

const arr1 = [10, 20, 30];
        const arr2 = [15, 25, 35];
function sumTogether(arr1, arr2) {
    if (arr1.length !== arr2.length) return [];
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}
console.log(sumTogether(arr1, arr2));

const elements = ["a", "a", "b", "c", "b", "d"];
function countElements(elements) {
    let result = {};
    for (let i = 0; i < elements.length; i++) {
        if (result[elements[i]]) result[elements[i]]++;
        else result[elements[i]] = 1;
    }
    return result;
}
console.log(countElements(elements));

const FACE_CARD_VALUES = {
    JACK: 2,
    QUEEN: 3,
    KING: 4,
    ACE: 5
};
function playerHandScore(hand) {
    let result = 0;
    for (let i = 0; i < hand.length; i++) {
        if (hand[i] === 'K') result += FACE_CARD_VALUES.KING;
        else if (hand[i] === 'Q') result += FACE_CARD_VALUES.QUEEN;
        else if (hand[i] === 'J') result += FACE_CARD_VALUES.JACK;
        else result += FACE_CARD_VALUES.ACE;
    }
    return result;
}
console.log(playerHandScore('JKQQ'));