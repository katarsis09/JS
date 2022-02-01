let myName = 'kAtE';
let mySurname = 'sAdyKoVa';

let myName_firstWord = myName.substr(0,1);
let mySurname_firstWord = mySurname.substr(0,1);

let myName_trueFirstWord = myName_firstWord.toUpperCase();
let mySurname_trueFirstWord = mySurname_firstWord.toUpperCase();

let myName_allWord = myName.substr(1);
let mySurname_allWord = mySurname.substr(1);

let myName_trueAllWord = myName_allWord.toLowerCase();
let mySurname_trueAllWord = mySurname_allWord.toLowerCase();


let myNewName = myName_trueFirstWord + myName_trueAllWord;
let myNewSurname =  mySurname_trueFirstWord + mySurname_trueAllWord;

let fullName = myName + ' ' + mySurname;
let newFullName = myNewName + ' ' + myNewSurname;

console.log('Исходное имя:', fullName);
console.log('Полученное имя', newFullName);

if (fullName !== newFullName) {
  console.log('Имя преобразовано');
} else {
  console.log('Имя без изменений');
}
