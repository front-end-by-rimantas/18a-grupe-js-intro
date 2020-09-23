const num1 = 8;
const num2 = 7;

if (num1 <= num2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

const language = 'JavaScript';
const languageSize = language.length;
console.log('Language kintamojo ilgis yra ', languageSize);

const thanks = 'gracies';
const thanksLength = thanks.length;
console.log(thanks, '->', thanks.length);

if (languageSize > thanksLength) {
    console.log('Ilgesnis');
} else {
    console.log('Trumpesnis');
}


const abc = ['a', 'b', 'c', 'd', 'e'];
const abcSize = abc.length;
const luckyNumbers = [3, 5, 7];
const luckiesCount = luckyNumbers.length;

console.log(abc);
console.log('ABC size is ', abcSize);

console.log(luckyNumbers);
console.log('Luckies size is ', luckiesCount);

if (abc.length > luckyNumbers.length) {
    console.log('True');
} else {
    console.log('False');
}