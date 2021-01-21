//startup name generator
const firstWords = ['Easy','Awesome','Corporate','Company','Startup','Software','Information Technology','Cognizant','TCS','Infosys'];
const secondWords = ['Red','blue','yellow', 'green', 'Violet','Circle','Square','Triangle','Rectangle', 'Oval'];
const randomNumber = Math.floor(Math.random() * 10) + 0;
const startUpName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];
console.log('The startup: ' + startUpName + ' ' + 'contains' + ' ' + startUpName.length + ' ' + 'characters');