//startup name generator
let firstWords = ['Easy','Awesome','Corporate','Company','Startup','Software','Information Technology','Cognizant','TCS','Infosys'];
let secondWords = ['Red','blue','yellow', 'green', 'Violet','Circle','Square','Triangle','Rectangle', 'Oval'];
let randomNumber = Math.floor(Math.random()*firstWords.length);
let startUpName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];
console.log('The startup: ' + startUpName + ' ' + 'contains' + ' ' + startUpName.length + ' ' + 'characters');
