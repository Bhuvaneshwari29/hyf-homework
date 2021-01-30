//Flight booking full name function
function getFullName(firstname,surname)
{
 return firstname+' '+surname;   
}
const fullname = getFullName("Bhuvaneshwari", "Periyasundaram"); 
console.log(fullname);
const fullName1 = getFullName('Krithikaa','Raja');
const fullName2 = getFullName('Lavanya','Sri');
console.log(fullName1);
console.log(fullName2);


//formal fullname
function getFullName(firstname,surname,useFormalName)
{
 if(useFormalName)
 {
     return 'Lord'+' '+firstname+' '+surname;
 }
 else
 {
     return firstname+' '+surname;
 }
}
const fullName3 = getFullName('Bhuvaneshwari','Periyasundaram',true);
const fullName4 = getFullName('Sanju','sri');
console.log(fullName3);
console.log(fullName4);

//Event application
const week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
function getEventWeekday(number)
{
    let dateOfTheWeek = new Date();
    let dayOfTheWeek = dateOfTheWeek.getDay();
    let dayOfTheEvent = (dayOfTheWeek + number)%7;
    return week[dayOfTheEvent];
}
console.log(getEventWeekday(7));

//weather wear
let temperature =10;
function clothesToWear(temperature)
{
    if(temperature>=25)
    {
        console.log('wear shorts and T-shirts');
    }
    else if(temperature>=15 && temperature <25)
    {
        console.log('wear sweaters and jeans');
    }
    else
    {
        console.log('wear jackets');
    }
}
clothesToWear(temperature);


//student manager

const class07Students = [];
function addStudentToClass(studentName) 
{
  if(studentName===" ")
  {
    console.log('you cannot add a empty string to a class')
  }
  else if(class07Students.includes(studentName))
  {
      console.log('Student'+studentName+'is already in the class');
  }
  else if(studentName==='Queen')
  {
      class07Students.push(studentName);
  }
  else if(class07Students.length>6)
  {
      console.log('Cannot add more students to class 07".');
  }
  else
  {
      class07Students.push(studentName);
      return class07Students;
  }
}
function getNumberOfStudents() {
  return class07Students.length;
}
addStudentToClass('Bhuvana');
addStudentToClass('Krithikaa');
addStudentToClass('Sanjana');
addStudentToClass('Shruthi');
addStudentToClass('Prashanth');
addStudentToClass('Balu');
addStudentToClass('Queen');
console.log(class07Students);
console.log('The number of students in the class is' +' '+ getNumberOfStudents());


//candy helper
let totalPrice=0;
let boughtCandyPrices=[];
function addCandy(candyType,weight){
  if(candyType=='sweet')
  {
      boughtCandyPrices.push(weight*0.5);
  }
  else if(candyType=='chocolate')
  {
      boughtCandyPrices.push(weight*0.7);
  }
  else if(candyType=='Toffee')
  {
      boughtCandyPrices.push(weight*1.1);
  }
  else if(candyType=='Chewing-gum')
  {
      boughtCandyPrices.push(weight*0.03);
  }
  return boughtCandyPrices;
}
function calculatePrice()
{
    let i=0;
    while(i<boughtCandyPrices.length)
    {
        totalPrice=boughtCandyPrices[i]+totalPrice;
        i++;
    }
    return totalPrice;
}
const amountToSpend = Math.random()*100;
function canBuyMoreCandy(){

    if (amountToSpend>calculatePrice()){
    console.log(`You have ${amountToSpend} dkk & You spent ${totalPrice} dkk`);
    console.log('You can buy more, so please do!');
    
    }
    else{
    console.log(`You have ${amountToSpend} dkk & You spent ${totalPrice} dkk`);
    console.log('Enough candy for you!');
    }
    
    }
    
addCandy('Toffee',20);
addCandy('Sweet',20);
addCandy('Sweet',20);
addCandy('Toffee',20);
addCandy('Sweet',20);
canBuyMoreCandy();