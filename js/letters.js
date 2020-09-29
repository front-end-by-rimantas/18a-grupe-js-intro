function letters(text, step) {
    let errors = [];

    // validacija
    if (typeof text !== 'string') {
        errors.push('ERROR: pirmas kintamasis turi buti tekstas.');
    }
    if (typeof step !== 'number') {
        errors.push('ERROR: antras kintamasis turi buti skaicius.');
    }

    if (errors.length > 0) {
        return errors;
    }

    // logika
    const textSize = text.length;
    let ats = '';

    for (let i = 0; i < textSize; i++) {
        const letter = text[i];

        if (i % step === step - 1) {
            ats += letter;
        }
    }

    return ats;
}

console.log(letters(1561, 2));
console.log(letters('Labas', 'rytas'));
console.log(letters(1561, 'rytas'));

console.log(letters('abcdefg', 2), '->', 'bdf');
console.log(letters('abcdefghijkl', 3), '->', 'cfil');

// console.log(letters('abcdefg', -2), '->', 'fdb');
// console.log(letters('abcdefghijkl', -3), '->', 'jgda');

// console.log(letters('abc', 0));
// console.log(letters('abc', 4));