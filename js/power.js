// Skaiciaus kelimas duotu laipsniaus rodikliu

function power(skaicius, laipsnis) {
    let ats = 1;
    for (let i = 0; i < laipsnis; i++) {
        ats *= skaicius;
    }
    return ats;
}

console.log(power(0, 100), '->', 0);    // 0*0*0*0*0*0*0.... = 0
console.log(power(2, 8), '->', 256);    // 2*2*2*2*2*2*2*2 = 256
console.log(power(3, 3), '->', 27);     // 3*3*3 = 27
console.log(power(-5, 2), '->', 25);    // -5*-5 = 25