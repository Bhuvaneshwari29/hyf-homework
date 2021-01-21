//Dog age calculator
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
let shouldShowResultInDogYears = false;
const humanYear = dogYearFuture - dogYearOfBirth;
if (shouldShowResultInDogYears)
{
    console.log('Your dog will be ' + dogYear + ' ' + 'dog years old in ' + dogYearFuture + ' ' + '.');
}
else
{
    console.log('Your dog will be ' + humanYear + ' ' + 'human years old in ' + dogYearFuture + ' ' + '.');
}