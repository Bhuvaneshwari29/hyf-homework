//Movies exercise

async function movieFunction() {
  try {
    const movieResponse = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    const movieData = await movieResponse.json();
    //create an array of bad movies
    const badMovie = movieData.filter((movie) => movie.rating <= 5);
    const badMovieTitle = badMovie.map((movie) => movie.title);
    console.log("Badmovies : ", badMovieTitle);
    //create an array of bad movies since year 2000
    const badMovie2000 = badMovie.filter((movie) => movie.year >= 2000);
    const badMovie2000Title = badMovie2000.map((movie) => movie.title);
    console.log("Bad movies since 2000: ", badMovie2000Title);
  } catch (error) {
    console.log(error);
  }
}
movieFunction();

//Promise that resolves after set time
function resultAfterSetTime(resolveAfter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  });
}
//When you have written the promise, use it with async/await
async function getResult() {
  await resultAfterSetTime(8);
  console.log("Iam async response");
}
getResult();

//Rewrite time
//code added for timeout
async function setTimeoutPromise(resolveAfter) {
  return new Promise((resolve) => setTimeout(resolve, resolveAfter));
}
//Example of usage for timeout
setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});
//code added for geolocation
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      resolve(position);
      reject("rejected");
    });
  });
}
//Example of usage for geolocation
getCurrentLocation()
  .then((position) => {
    // when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // if there was an error getting the users location
    console.log(error);
  });

//Fetching and waiting
//Do the 3 steps below using promises and .then
const usePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 2000);
}).then(() => {
  fetch("http://api.open-notify.org/astros.json")
    .then((response) => response.json())
    .then((data) =>
      console.log(
        "for using promises and .then : astro number are ",
        data.number
      )
    );
});
//Do the 3 steps below using async/await
async function useAsyncAwait() {
  try {
    const fetchdata = await fetch("http://api.open-notify.org/astros.json");
    const astroCount = await fetchdata.json();
    console.log(
      "for Using Promise async await function : astro number are ",
      astroCount.number
    );
  } catch (error) {
    console.log(error);
  }
}
useAsyncAwait();
