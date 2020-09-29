/*
name: Vardenis
birthYear: 2002

print: Vardenis dabar yra 18 metu.
*/

function birth(name, dob) {
    return `${name} dabar yra ${2020 - dob} metu.`;
}

console.log(birth('Vardenis', 2002));
console.log(birth('Maryja', -30));