//Log out the text Called after 2.5 seconds
const loadScript = () =>{
    setTimeout(() => {
        console.log('Called after 2.5 seconds');
    }, 2500)};

    document.addEventListener('DOMContentLoaded',(event) => {
        loadScript();
    });


// Create a function that takes 2 parameters
function delayLog(delay1, stringToLog){
    setTimeout(()=> {
        console.log(stringToLog);
        }, delay1*1000);
  }
  delayLog(5, "This string log after 5 sec");
  delayLog(3, "This string logged after 3 sec");

//5 seconds after the button is clicked
const btn = document.getElementById("clickMe");
btn.addEventListener("click",()=>{
    setTimeout(()=> {console.log("Log after 5 sec");}, 5000)
});

//Create two functions and assign them to two different variables
function earthLogger(){
    console.log("Earth");
  }
  function saturnLogger(){
     console.log("Saturn");
  }
  function planetLogFunction(callback1){
     callback1();
  }
  planetLogFunction(earthLogger);
  planetLogFunction(saturnLogger);

//Create a button with the text called "Log location". When this button is clicked the location of the user should be logged
let btn1 = document.getElementById("find-me");
let map1 = document.getElementById("map1")
btn1.addEventListener("click", geoFindme);
function geoFindme() {
    if('geolocation' in navigator ){
    console.log('geolocation is available');
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        document.getElementById("latitude").innerText = lat;
        document.getElementById("longitude").innerText = lng;
    });
}
else {
    console.log("geolocation is not available");
}}

//call this function with different delays and different callback functions
function runAfterDelay(delay,callback2) {
  setTimeout(()=> {
    callback2();
    }, delay*1000);
}
runAfterDelay(4, function(){
    console.log("different ex: should be logged after 4 sec");
})
runAfterDelay(10, function(){
  let answer = 10 + 10;
   console.log("differnt ex:",answer);
});

//Check if we have double clicked on the page
let lastClick = 0;
document.addEventListener("click", (e) => {
const thisClick = Date.now(); 
if (thisClick - lastClick < 500) {
    console.log('Double click!');
    return;
  }
lastClick = thisClick;
});

//jokeCreator
function jokeCreator(shouldTellFunnyJoke,logFunnyJoke,logBadJoke){
    if (shouldTellFunnyJoke){
      logFunnyJoke();
  }
  else{
      logBadJoke();
  }
  };
  function logFunnyJoke() {
    console.log("funny Joke");
  };
  function logBadJoke(){
      console.log("Bad Joke");
  };
      jokeCreator(true,logFunnyJoke ,logBadJoke );
      jokeCreator(false,logFunnyJoke , logBadJoke);
  
//Function as a variable

const arrayOfFunctions = [
          (a) => console.log("Hi"),
          (b) => console.log("Hello"),
          (c) => console.log("Hola"),
        ];
const newFunctionsArray = arrayOfFunctions.forEach((allFunction) => allFunction());
 //create function as a const
const functionOfConst = () => console.log("I am const function");
 // create function normally
function randomFunction() {
          console.log("I am normal Function");
        }
functionOfConst();
randomFunction();
//Create an object that has a key whose value is a function.
const objectFunction = {
    nameFun : function functionOfObject() {
    console.log("I am key of object")
     }
    };
 objectFunction.nameFun();