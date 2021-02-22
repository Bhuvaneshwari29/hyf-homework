//Write a function that finds the shortest word of an array of words
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortestWords(danishWords){
    let shortValue = danishWords[0];
    for (const shortWord of danishWords){
        if(shortValue.length > shortWord.length){
            shortValue=shortWord;
        }
    }
    return shortValue;
}
console.log('Shortest word of an array of words='+shortestWords(danishWords));

//Find and count the Danish letters
const danishString = "Jeg har en blå bil";
//notThisFunctionName(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
//notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
function individualChar(danishString){
    let count=0;
    let countå=0;
    let countø=0;
    let countæ=0;
    let output=new Object();
    for(let i=0;i<danishString.length;i++){
        const stringsIndex =danishString[i];
        if(stringsIndex==='å'){
            count++;
            countå++;
            output.å=countå;
        }
        else if(stringsIndex==='ø'){
            count++;
            countø++;
            output.ø=countø;
        }
        else if(stringsIndex==='æ'){
            count++;
            countæ++;
            output.æ=countæ;
        }
    }
    output.total=count;
    return output;

}
console.log(individualChar(danishString2));
console.log(individualChar(danishString));

//Spirit animal name generator
const body =document.querySelector('body');
const myInput=document.getElementById('name');
const hoverOption=document.getElementById('hover-option');
const buttonOption=document.getElementById('button-option');
const myButton=document.getElementById('spiritButton');
buttonOption.addEventListener('change',function() {
    myInput.removeEventListener('mouseover',eventCall);
    if (buttonOption.checked){
        myButton.addEventListener('click',eventCall);
    }
});
hoverOption.addEventListener('change',function(){
    myButton.removeEventListener('click',eventCall);
    if(hoverOption.checked){
        myInput.focus();
        myInput.addEventListener('mouseover',eventCall);
    }
});
function eventCall(){
    const spiritAnimalString = [
        'Swans',
        'Owl',
        'Frogs',
        'Spider',
        'Wolf',
        'Bats',
        'Crow',
        'Butterfly'
    ];
    const random=Math.floor(Math.random()*spiritAnimalString.length);
    const divElement=document.createElement('div');
    body.appendChild(divElement);
    if(myInput.value===''){
        divElement.innerText='Empty!! Please enter a name';
    }
    else{
        divElement.innerText = `${myInput.value} - ${spiritAnimalString[random]}`;
    }
}
