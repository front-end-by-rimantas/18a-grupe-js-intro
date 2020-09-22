console.log(4154);
console.log("labuka");
console.log('rytas');

// Kintamieji - cia atmintyje laikoma informacija

const amzius = 21;
const vardas = "Johnny Bravo";
const miestas = 'Chikaga';

console.log(vardas);
console.log(amzius);
console.log(miestas);


const skaicius1 = 87;
const skaicius2 = 16;

const suma1 = skaicius1 + skaicius2;

console.log(skaicius1, '+', skaicius2, '=', suma1);
console.log(skaicius1 + ' + ' + skaicius2 + ' = ' + suma1);

const suma2 = 2564565;

console.log('----------------');

let luckyNumber = 7;
console.log('luckyNumber', luckyNumber);

luckyNumber = luckyNumber + 3;
console.log('luckyNumber', luckyNumber);

luckyNumber = luckyNumber + 3;
console.log('luckyNumber', luckyNumber);

luckyNumber = luckyNumber + 3333;
console.log('luckyNumber', luckyNumber);

luckyNumber + 584152847152;
console.log('luckyNumber', luckyNumber);

console.log('----------------');
// PAZYMIU VIDURKIS

const paz1 = 2;
let suma = paz1;
let pazKiekis = 0;
let vidurkis = 0;

pazKiekis = pazKiekis + 1;
vidurkis = suma / pazKiekis;
console.log(vidurkis);

const paz2 = 8;
suma = suma + paz2;

pazKiekis = pazKiekis + 1;
vidurkis = suma / pazKiekis;
console.log(vidurkis);

const paz3 = 7;
suma = suma + paz3;

pazKiekis = pazKiekis + 1;
vidurkis = suma / pazKiekis;
console.log(vidurkis);


const PI = -3.141529654;

// array
const pazymiai = [10, 2, 8, 7, 6];
console.log(pazymiai);

const vardai = ['Jonas', 'Maryte', 'Chuck Norris', "Johnny Bravo", 'Wonder Woman'];
console.log(vardai);


const hi = 'Labas';
const morning = 'rytas';
const smile = '😉';
const space = ' ';

const pasisveikinimas = hi + ' ' + morning + ' ' + smile;
const pasisveikinimas2 = hi + ' ' + morning;
console.log(pasisveikinimas);
console.log(hi + ' ' + morning + ' ' + smile);
console.log(pasisveikinimas2 + '.');

console.log('---------------------');

console.log(pazymiai);
let index = 0;
let pazymiuSuma = pazymiai[index++];
pazymiuSuma = pazymiuSuma - pazymiai[index++];
pazymiuSuma = pazymiuSuma + pazymiai[index++];
pazymiuSuma = pazymiuSuma - pazymiai[index++];
pazymiuSuma = pazymiuSuma + pazymiai[index++];

console.log('Pazymiu suma yra', pazymiuSuma);


console.log('---------------------');

let greitis = 0;
console.log('mano greitis:', ++greitis);
console.log('mano greitis:', ++greitis);
greitis = greitis + 6;
console.log('mano greitis:', ++greitis);
console.log('mano greitis:', ++greitis);
console.log('mano greitis:', ++greitis);
console.log('mano greitis:', ++greitis);


console.log('---------------------');

const abc = ['a', 'b', 'c', 'd', 'e'];
console.log(abc);

let sakinys = abc[0];
sakinys = sakinys + ', ' + abc[1];
sakinys = sakinys + ', ' + abc[2];
sakinys = sakinys + ', ' + abc[3];
sakinys = sakinys + ', ' + abc[4];

console.log(sakinys);