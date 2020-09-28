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












function atimtis(a, b) {
    return a - b;
}

const skirtumas1 = atimtis(8, 4);
const skirtumas2 = atimtis(18, 14);
const skirtumas3 = atimtis(8, 24);
const skirtumas4 = atimtis(108, 4);

console.log(skirtumas1);
console.log(skirtumas2);
console.log(skirtumas3);
console.log(skirtumas4);


function autoAshys(ratuKiekis) {
    let asiuKiekis = 1;
    let darNepanaudotuRatuKiekis = ratuKiekis - 2;

    if (darNepanaudotuRatuKiekis === 2) {
        asiuKiekis++;
    } else {
        asiuKiekis = asiuKiekis + darNepanaudotuRatuKiekis / 4;
    }

    return asiuKiekis;
}

function autoAshys(ratuKiekis) {
    if (ratuKiekis === 4) {
        return 2;
    } else {
        return (ratuKiekis - 2) / 4 + 1;
    }
}

console.log(autoAshys(4))       // 2 => 2+2
console.log(autoAshys(10))      // 3 => 2+4+4
console.log(autoAshys(14))      // 4 => 2+4+4+4
console.log(autoAshys(18))      // 4 => 2+4+4+4+4

console.clear();

const appSize = [400, 8, 7, 6, 1, 1, 9, 45, 7, 2];
const phoneMemorySize = 70;

const appSize2 = [1, 2, 4, 3, 2, 7, 9, 1, 1];
const phoneMemorySize2 = 15;

function kiekTilpsAppsu(memory, list) {
    let usedSpace = 0;
    let installedAppsCount = 0;
    const appCount = list.length;

    for (let i = 0; i < appCount; i++) {
        const appSize = list[i];
        usedSpace += appSize;
        if (usedSpace <= memory) {
            installedAppsCount++;
        }
    }

    return installedAppsCount;
}

const phoneAppCount = kiekTilpsAppsu(phoneMemorySize, appSize);
const phoneAppCount2 = kiekTilpsAppsu(phoneMemorySize2, appSize2);

console.log(phoneAppCount);     // 7
console.log(phoneAppCount2);    // 5