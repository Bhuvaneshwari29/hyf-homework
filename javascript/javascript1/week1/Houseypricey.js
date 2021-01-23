//House price calculator
const peterWidth = 8;
const peterDeep = 10;
const peterHeight = 10;
const peterVolumeInMeters = peterWidth * peterDeep * peterHeight;
const peterGardenSizeInMeters = 100;
const peterHouseCost = 2500000;
peterHousePrice = peterVolumeInMeters * 2.5 * 1000 + peterGardenSizeInMeters * 300;
let peterHouse;
if (peterHouseCost > peterHousePrice)
{
    peterHouse ='Peter is paying more';
}
else if(peterHouseCost==peterHousePrice)
{
    peterHouse ='Peter is paying right amount';
}
else
{
    peterHouse ='Peter is not paying more';
}
console.log(peterHouse);


const juliaWidth = 5;
const juliaDeep = 11;
const juliaHeight = 8;
const juliaVolumeInMeters = juliaWidth * juliaDeep * juliaHeight;
const juliaGardenSizeInMeters = 70;
const juliaHouseCost = 1000000;
juliaHousePrice = juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInMeters * 300;
let juliaHouse;
if (juliaHouseCost > juliaHousePrice)
{
    juliaHouse ='Julia is paying more';
}
else if(juliaHouseCost==juliaHousePrice)
{
    juliaHouse ='Julia is paying right amount';
}
else
{
    juliaHouse ='Julia is paying less';
}
console.log(juliaHouse);