function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

console.clear();



function daugyba(pirmas, antras) {
    return pirmas * antras;
}

console.log(`daugyba: ${daugyba(4, 5)}`);
console.log(`daugyba: ${daugyba(3, 5)}`);
console.log(`daugyba: ${daugyba(13, 55)}`);

console.clear();

function sayHi(vardas) {
    return `Labas, as esu ${vardas}... Ka tu?`;
}

const name1 = 'Vardenis';
const name2 = 'Vardeniauskas';

// Labas, as esu Vardenis... Ka tu?
console.log(sayHi(name1));

// Labas, as esu Vardeniauskas... Ka tu?
console.log(sayHi(name2));


function sum(a, b, c) {
    const suma = a + b + c;
    return `Susumavus ${a}, ${b} ir ${c} gauname ${suma}.`;
}

// Susumavus 1, 2 ir 3 gauname 6.
// Susumavus 11, 22 ir 33 gauname 66.

console.log(sum(1, 2, 3));
console.log(sum(11, 22, 33));

console.clear();

function dienos(days) {
    return `Spausdinu ${days} dienas.`;
}

function mokesciai(money, tax) {
    return money * tax / 100;
}

console.log(mokesciai(1000, 21));
console.log(mokesciai(500, 15));