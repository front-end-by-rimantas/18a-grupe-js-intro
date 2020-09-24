const nuo = -18;
const iki = 18;
const daliklis = 7;

let count = 0;

// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.

for (let i = nuo; i <= iki; i++) {
    console.log(i, '%', daliklis, '=', i % daliklis);

    if (i % daliklis === 0) {
        count++;
    }
}

console.log('Skaičių intervale tarp ' + nuo + ' ir ' + iki + ', besidalijančių be liekanos iš ' + daliklis + ' yra ' + count + ' vienetai.');

console.log(`Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${count} vienetai.`);


const name = 'Vardenis';
const lastName = "Pavardenis";

const city = `Miestas`;



// Vienguba (') kabute.
console.log("Vienguba (') kabute.");

// Dviguba (") kabute.
console.log('Dviguba (") kabute.');

// Vienguba (') ir dviguba (") kabutes.
const pradzia = "Vienguba (') ir ";
const pabaiga = 'dviguba (") kabutes.';

console.log(pradzia + pabaiga);

const links = ['Home', 'Services', 'Contact us'];

const HTML = `<header>
                < img src = "#" alt = "Logo" />
                    <nav>
                        <a href="#">${links[0]}</a>
                        <a href="#">${links[1]}</a>
                        <a href="#">${links[2]}</a>
                        <a href="#">${2 + 2}</a>
                    </nav>
            </header >`;


console.log(HTML);