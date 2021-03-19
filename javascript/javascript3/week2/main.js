const redColorBox = document.querySelector("ul.marks li:nth-child(1)");
const blueColorBox = document.querySelector("ul.marks li:nth-child(2)");
const greenColorBox = document.querySelector("ul.marks li:nth-child(3)");
console.log(redColorBox.style.left);
const redCircle = {
  x: 20 - parseInt(redColorBox.style.left),
  y: 300 - parseInt(redColorBox.style.top),
};
const blueCircle = {
  x: 400 - parseInt(blueColorBox.style.left),
  y: 300 - parseInt(blueColorBox.style.top),
};
const greenCircle = {
  x: 400 - parseInt(greenColorBox.style.left),
  y: 20 - parseInt(greenColorBox.style.top),
};

//translate one by one

async function translateOneByOne() {
  try {
    await moveElement(redColorBox, redCircle);
    console.log("Red box moved");
    await moveElement(blueColorBox, blueCircle);
    console.log("Blue box moved");
    await moveElement(greenColorBox, greenCircle);
    console.log("Green box moved");
  } catch (error) {
    console.log(error.message);
  }
}
translateOneByOne();

//translate all at once
function translateAllAtOnce() {
  moveElement(redColorBox, redCircle);
  moveElement(blueColorBox, blueCircle);
  moveElement(greenColorBox, greenCircle);
  Promise.all([redColorBox, blueColorBox, greenColorBox])
    .then(() => {
      console.log("All the circles moved together");
    })
    .catch((err) => console.log(err));
}
translateAllAtOnce();
