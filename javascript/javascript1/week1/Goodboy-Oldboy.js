//Dog age calculator
let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = (dogYearFuture - dogYearOfBirth) * 7;
let shouldShowResultInDogYears = false;
let humanYear = dogYearFuture - dogYearOfBirth;
if (shouldShowResultInDogYears)
{
    console.log('Your dog will be ' + dogYear + ' ' + 'dog years old in ' + dogYearFuture + ' ' + '.');
}
else
{
    console.log('Your dog will be ' + humanYear + ' ' + 'human years old in ' + dogYearFuture + ' ' + '.');
}