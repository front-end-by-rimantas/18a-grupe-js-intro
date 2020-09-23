// kintamieji: numbers, string, array, boolean (true / false)
// salygos: if, switch

const age = 15;
const name = 'Vardenis';
const luckyNumbers = [3, 5, 7, 13];
const cities = ['Vilnius', 'Klaipeda', 'Riga'];

let agreedWithCookies = true;

if (agreedWithCookies === false) {
    console.log('Ar sutinki su sausainiais? Y/N');
}

if (age > 21) {
    console.log('Wow, kiek tau daug metu :P');
} else {
    console.log('Nope, negausi... 🍼');
}

// if (eyeColor === 'melyna') {
//     console.log('Uj, koks geras katinelis!');
// } else {
//     if (eyeColor === 'rudos') {
//         console.log('Melagis 👿');
//     } else {
//         if (eyeColor === 'zalios') {
//             console.log('Bais protingas.');
//         } else {
//             if (eyeColor === 'pilka') {
//                 console.log('Karocia...');
//             } else {
//                 console.log('A tu turi akis?');
//             }
//         }
//     }
// }

// if (eyeColor === 'melynos') {
//     console.log('Uj, koks geras katinelis!');
// } else if (eyeColor === 'zalios') {
//     console.log('Bais protingas.');
// } else if (eyeColor === 'rudos') {
//     console.log('Melagis 👿');
// } else if (eyeColor === 'pilkos') {
//     console.log('Karocia...');
// } else {
//     console.log('A tu turi akis?');
// }

const eyeColor = 'rudos';
let eyeSentenceEnd = '';

switch (eyeColor) {
    case 'melynos':
        eyeSentenceEnd = 'Uj, koks geras katinelis!';
        break;
    case 'zalios':
        eyeSentenceEnd = 'Bais protingas.';
        break;
    case 'rudos':
        eyeSentenceEnd = 'Melagis 👿';
        break;
    case 'pilkos':
        eyeSentenceEnd = 'Karocia...';
        break;
    default:
        eyeSentenceEnd = 'A tu turi akis?';
        break;
}

console.log('Kadangi tavo akiu spalva yra ', eyeColor, 'tai ', eyeSentenceEnd);

// ternary operatorius
// if salyga ? jei tenkina : jei netenkina

const favoriteAnimal = 'doggo';

const sentence = 'My favirote animal is: ' + (favoriteAnimal === 'doggo' ? 'dog' : 'cat');
console.log(sentence);