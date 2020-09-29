/* Medvarztis:
ilgis: 15mm
zingsnis: 1.5mm
rankos pasukimas: 140deg

kiek reikia pasukimu pilkai susukti medvarzsti?     25.7
*/

function screw(height, stepHeight, turn) {
    const stepCount = height / stepHeight;
    const turnsPerStep = 360 / turn;
    const turnsCount = stepCount * turnsPerStep;
    return turnsCount;

    // single-line solution
    // return (height / stepHeight) * (360 / turn);
}

console.log(screw(15, 1.5, 140), '->', 25.7);
console.log(screw(15, 1.5, 120), '->', 30);