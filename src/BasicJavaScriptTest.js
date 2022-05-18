// Task 1

// function factorial(number) {
//     if (number === 0) {
//         return 1;
//     }
//     return number * factorial(number - 1);
// }
// console.log(factorial(9));


// Task 2 

// function getMax(array) {
//     return Math.max(...array.map(element => Array.isArray(element) ? getMax(element) : element));
// }

// var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

// console.log(getMax(ar));


// Task 3

// const findDuplicates = (array) => {
//     let numberArray = [];
//     for (let i = 0; i < array.length - 1; i++) {
//         const number = +array[i];
//         numberArray.push(number);
//     }
//     numberArray = array.slice().sort();
//     let results = [];
//     for (let i = 0; i < numberArray.length - 1; i++) {
//         if (numberArray[i + 1] === numberArray[i]) {
//             results.push(numberArray[i]);
//         }
//     }
//     return results;
// }

// const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"];
// const duplicates = findDuplicates(arr);
// const duplicatesCount = duplicates.length;
// console.log(`The duplicated numbers are: ${duplicates}. And there are ${duplicatesCount} number counted that duplicated`);

// Task 4

function findUniqueValue(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (newArr.indexOf(array[i]) === -1) {
            newArr.push(array[i]);
        }
    }
    newArr.sort(function (a, b) { return a - b; });
    return newArr;
}

const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8]
const uniqueValues = findUniqueValue(arr);
console.log('unique values are:', uniqueValues);

