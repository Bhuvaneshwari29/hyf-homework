//voice assistant
//array for to do list
const listToDo = [];
//function that returns a response of a command
let inputName='';
function getReply(command){
    //hello myname is Benjamin
    let sentence = command.split(' ');
    if(command=== 'Hello my name is Benjamin'){
        if(inputName ===''){
            inputName =sentence[sentence.length-1];
            return('Nice to meet you '+inputName);
        }
        else{
            return('Repeat sentence');
        }
    }
        else if(command==='What is my name?') 
        {
          return('Your name is '+inputName);
        }
//Add fishing to my todo
//Add singing in the shower to my todo
 else if (sentence[0] ==='Add'){
     listToDo.push(sentence.slice(1,sentence.indexOf('to')).join(' '));
     return(sentence.slice(1,sentence.indexOf('to')).join(' ') + ' added to your todo');
 }
 //Remove fishing from todo
 else if(sentence[0] ==='Remove'){
     listToDo.splice(listToDo.indexOf(sentence.slice(1,sentence.indexOf('from')).join(' ')),1);
     return('Removed '+sentence.slice(1,sentence.indexOf('from')).join(' ')+' from your todo');
 }
 else if(sentence[0] ==='What' && sentence[sentence.length-1] === 'todo?'){
     return('You have '+listToDo.length+' todos - '+listToDo.join(' and '));
 }
 //what day is it today
 else if(command =='What day is it today?')
 {
     let monthOfYear=['January','Febrauary','March','April','May','June','July','August','September','October','November','December'];
     let month= new Date().getMonth();
     month= monthOfYear[month];
     return (new Date().getDate()+'.of '+ month +' '+new Date().getFullYear());
 }
 //set timer for 4 minutes
 else if(command == 'Set a timer for 4 minutes')
 {
     let time = command.substr(16,2);
     console.log('Timer set for '+time+' minutes');
     let timeToMiliSeconds = time*60*1000;
     setTimeout(function(){console.log('Timer Done');}, timeToMiliSeconds);
 }
     //Simple math
     else{
         return getmath(sentence);
     }
 }
 function getmath(mathEquation){
     const a = Number(mathEquation[0]);
     const operator = mathEquation[1];
     const b =Number(mathEquation[2]);
     switch(operator){
         case '+':
             return a+b;
             case '-':
                 return a-b;
                 case '*':
                     return a*b;
                     case '/':
                         return a/b;
                         case '%':
                             return a%b;
     }
 }
//Reply for Hello my name is Benjamin example
console.log(getReply('Hello my name is Benjamin'));
//Reply for what is my name example
console.log(getReply('What is my name?'));
//Reply for add fishing and to do example
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my to do'));
//Remove fishing from my todo example
console.log(getReply('What is on my todo?'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
//Example of what day is it
console.log(getReply('What day is it today?'));
//Example set timer for 4 minutes
getReply('Set a timer for 4 minutes');
//Example of simple math
console.log(getReply('3 + 3'));
console.log(getReply('4 * 3'));
