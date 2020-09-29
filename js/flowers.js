/* Turim geliu soda
viso turima vazonu: 20
pradinis vazonu kiekis: 1
geliu dauginimo greitis: 1 (kasmet po 1 vaika)

per kiek metu pasidengs visa teritorija gelemis?

1 - 1
2 - 2
3 - 4
4 - 8
*/

function flowers(totalPots, initialPots, childrenPerFlower) {
    let pots = initialPots;
    let year = 1;

    while (pots < totalPots) {
        pots = pots + pots * childrenPerFlower;
        year++;
    }
    return year;
}

console.log(flowers(20, 1, 1));     // 6
// console.log(flowers(50, 4, 2));     // 4

const a = 2.0001;
const x = Math.ceil(a);
const y = x * x;

console.log(`I virsu suaplavalinto a (${a}) kvadratas yra ${y}.`);
