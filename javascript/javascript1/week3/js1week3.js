//Item array removal

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  for (let i=0;i<names.length;i++)
  {
      if(names[i]===nameToRemove)
      {
          names.splice(i,1);
          break;
      }
  }
    
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


  //when will be there

  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function findTravelTime(travelInformation)
  {
    const travelTime = travelInformation.destinationDistance / travelInformation.speed;
    const travelHours = parseInt(Number(travelTime));
    const travelMin = Math.round((Number(travelTime) - travelHours) * 60);
    return `${travelHours} hours and ${travelMin} Minutes`;
      
  }  
  const travelTime = findTravelTime(travelInformation);
  console.log(travelTime); 

  //series duration of my life
  const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];
  function logOutSeriesText() {
    const numberOfYearsInHours = 80*365*24;
    let totalOfTime=0;
    for(i=0;i<seriesDurations.length;i++)
    {
      const dayHours=seriesDurations[i].days *24;
      const hours=seriesDurations[i].hours;
      const seriesTitle=seriesDurations[i].title;
      const totalPercentage = ((dayHours + hours)/numberOfYearsInHours)*100;
      totalOfTime += totalPercentage;
      console.log(`${totalPercentage.toFixed(3)} % takes ${seriesTitle}`);  
    }
    console.log(`${totalOfTime.toFixed(3)} % total series takes time in my life`);
  }
  
  logOutSeriesText(); // logs out the text found above

  //save a note
  const notes=[];
  function saveNote(content,id){
    const myNote= {
      content:content,
      id:id,
    };
    notes.push(myNote);
  }
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//get a note
function getNote(id) {
  for(i=0;i<notes.length;i++)
  {
    if(id===isNaN()){
      return 'you entered valid format';
    }
    else if (id===notes[i].id){
      return notes[i];
    }
    else{
      return error;
    }
  }
}
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}


//Logout notes

function logOutNotesFormatted() {
  for(i=0;i<notes.length;i++){
    console.log(`The note with id:${notes[i].id}, has the following note text:${notes[i].content}`);
  }
}

logOutNotesFormatted(); // should log out the text below
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

//CactusIO-interactive (Smart phone usage app) optional
//adding an activity
let activities=[];
function addActivity(dt,act,dur){
  let addedActivities = { date:new Date(),
    activity:act,
  duration:dur
};
if(typeof act==='string' && typeof dt==='string' && typeof dur==='number'){
  return activities.push(addedActivities);
}
else{
  return console.log('activity is a string and duration should be a number');
}
}
addActivity(',','Instagram',30);
addActivity(',','Facebook',40);
addActivity(',','Youtube',45);
console.log(activities);


//show my status and usage limit
showStatus(activities);
function showStatus(acti){
  let maxLimit=100;
  let totalDuration=0;
  for(let i=0;i<acti.length;i++){
    totalDuration += acti[i].duration;
  }
  console.log (`You have added ${acti.length} activities. They amount to ${totalDuration}min. of usage`);
      if (totalDuration>maxLimit){
    console.log('you have reached your limit, no more smart phone for you');
  }
else {
  console.log('you can use more smartphone');
}
}

//extra feature
function mostSpentTime() {
  let maxDuration = 0;
  let myTime;
  for (let i = 0; i < activities.length; i++) {
  if (activities[i].duration > maxDuration) {
  maxDuration = activities[i].duration;
  myTime = activities[i].activity;
  }
  }
  return myTime;
  }
  
  let maxUse = mostSpentTime();
  console.log(`your most of the time spent on ${maxUse}.`); 
  
  