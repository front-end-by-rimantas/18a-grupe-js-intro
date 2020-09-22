// if, switch, ternary


// IF:
// naudotini: >, <, ===, >=, <=, !==
// nenaudotini: ==, !=

const num1 = 8;
const num2 = 8;

if (num1 > num2) {
    console.log(num1, 'didesnis uz', num2);
}

if (num1 === num2) {
    console.log(num1, 'yra lygus', num2);
}

if (num1 < num2) {
    console.log(num1, 'mazesnis uz', num2);
}

const num3 = 16;
const num4 = 16;

if (num3 > num4) {
    console.log(num3, 'didesnis uz', num4);
} else {
    if (num3 === num4) {
        console.log(num3, 'lygus', num4);
    } else {
        console.log(num3, 'mazesnis uz', num4);
    }
}



const num5 = 77;
const num7 = 777;

if (num5 > num7) {
    console.log('daugiau');
} else if (num5 === num7) {
    console.log('lygu');
} else {
    console.log('maziau');
}


console.log('-------------');
// SWITCH

const diena = 'ses';

switch (diena) {
    case 'pir':
    case 'ant':
    case 'tre':
    case 'ket':
    case 'pen':
        console.log('Dirbam.');
        break;

    case 'ses':
    case 'sek':
        console.log('ilsimes 😉');
        break;

    default:
        console.log('Diena ne is musu kalendoriaus');
        break;
}


// Autobusas 6G;

console.log('-------------');

const stotele = 'Vasaros';

switch (stotele) {
    case 'Naujoji Vilnia':
        console.log('Naujoji Vilnia');
    case 'Geniu':
        console.log('Geniu');
    case 'Rudens':
        console.log('Rudens');
    case 'Kar Mindaugo':
        console.log('Kar Mindaugo');
    case 'Zaliasis tiltas':
        console.log('Zaliasis tiltas');
        break;

    case 'Lvovo':
        console.log('Lvovo');
    case 'Tuskulenai':
        console.log('Tuskulenai');
    case 'Vasaros':
        console.log('Vasaros');
    case 'Tremtiniu':
        console.log('Tremtiniu');
        break;

    default:
        console.log('Tokia stotele nerasta 🙁');
        break;
}