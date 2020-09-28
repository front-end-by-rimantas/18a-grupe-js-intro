"use strict";

function bigNum(list) {
    // validacijos
    if (typeof list !== 'object') {
        return 'ERROR: netinkamas tipas.'
    }

    if (list.length === 0) {
        return 'ERROR: sarasas negali buti tuscias.'
    }

    // logika
    let biggestNumber = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const currentNumber = list[i];

        if (typeof currentNumber === 'number') {
            if (currentNumber > biggestNumber) {
                biggestNumber = currentNumber;
            }
        }
    }

    if (biggestNumber === -Infinity) {
        return 'ERROR: sarase nera skaiciu.';
    }

    return biggestNumber;
}

console.log(bigNum('pomidoras'));
console.log(bigNum([]));
console.log(bigNum([false, 'asds', [], true, null, undefined, {}]));

console.log(bigNum([1]), '->', 1);
console.log(bigNum([5]), '->', 5);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([-2, -3, -4, -5, -6, -1, -7, -8]), '->', -1);
console.log(bigNum([-2, -3, -4, -5, -6, -7, -8, -1]), '->', -1);

console.log(bigNum([1, 7, 'a', -2, 8]), '->', 8);
console.log(bigNum([1, 7, -2, 8, 'xXx']), '->', 8);
console.log(bigNum(['abc', 1, 7, -2, 8]), '->', 8);
console.log(bigNum([true, 1, 7, -2, 8]), '->', 8);
console.log(bigNum([false, 1, 7, -2, 8]), '->', 8);
console.log(bigNum([['a', 7, 777], 1, 7, -2, 8]), '->', 8);
