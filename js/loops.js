const sayHi = 'Labas 😉';
const count = 3;

for (let i = 0; i < count; i++) {
    console.log(i, ': ', sayHi);
}

const seasons = ['Pavasaris', 'Vasara', 'Ruduo', 'Ziema'];
const seasonsCount = seasons.length;
console.log(seasons);

for (let i = 0; i < seasonsCount; i++) {
    console.log(seasons[i]);
}

// savaites dienos
console.clear();


const week = [
    'pirmadienis',
    'antradienis',
    'treciadienis',
    'ketvirdienis',
    'penktadienis',
    'sestadienis',
    'sekmadienis'
];

// const msg = 'Pirmadienis (1) yra darbo diena.';
// const msg = 'Sestadienis (6) yra savaitgalis.';
// for (let i = 0; i < week.length; i++) {
//     const weekday = week[i];
//     const dayNumber = i + 1;
//     const dayType = i < 5 ? 'darbo diena.' : 'savaitgalis.';

//     const msg = weekday + ' (' + dayNumber + ') yra ' + dayType;
//     console.log(msg);
// }

let weekday = '';
let dayNumber = 0;
let dayType = '';
let msg = '';

for (let i = 0; i < week.length; i++) {
    weekday = week[i];
    dayNumber = i + 1;
    dayType = i < 5 ? 'darbo diena.' : 'savaitgalis.';

    msg = weekday + ' (' + dayNumber + ') yra ' + dayType;
    console.log(msg);
}

console.clear();

// const diff = iki - nuo;

// for (let i = 0; i <= diff; i++) {
//     console.log(i + nuo);
// }


// 0 - 0    -> nulis

const nuo = 10;
const iki = 10;

let suma = 0;

for (let i = nuo; i <= iki; i++) {
    suma = suma + i;
    // console.log(i, suma);
}

console.log('Galutine suma:', suma);

console.clear();



const text = 'Labas!';
let atbulas = '';

// for (let i = 0; i < text.length; i++) {
//     atbulas = text[i] + atbulas;
//     console.log(i, atbulas);
// }

for (let i = 0; i < text.length; i++) {
    const raide = text[text.length - 1 - i];
    atbulas = atbulas + raide;
    console.log(i, atbulas);
}

console.log(text, '->', atbulas);