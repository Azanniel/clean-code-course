// Syntatic Sugars -> Evite

// Don't this
// const numberInString = '123456';
// const number = +numberInString;

// Do this
const numberInString = '12345';

const number = Number(numberInString);
const isNumberNotNull = Boolean(numberInString);
const numberAsString = String(number);