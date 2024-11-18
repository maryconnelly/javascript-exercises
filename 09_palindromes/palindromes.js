const palindromes = function (string) {

const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

const cleanedString = string
.toLowerCase()
.slice()
//new string
.split('')
//this gives me s t r i n g
.filter((character) => alphanumerical.includes(character))
//makes sure numbers and letters are accepted
.join('');

const reversedString = cleanedString.split('').reverse().join('');


return cleanedString === reversedString;

};

// Do not edit below this line
module.exports = palindromes;
