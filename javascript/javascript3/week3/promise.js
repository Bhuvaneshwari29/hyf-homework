//Getting into promises excercise
//Select 3 classmates github username - to show repositories for.
const username1 = "slaviaF";
const username2 = "islam-fawzy25";
const username3 = "Bhuvaneshwari29";
//Fetch all the 3 classmates repositories
const promise1 = fetch(
  `https://api.github.com/search/repositories?q=user:${username1}`
);
const promise2 = fetch(
  `https://api.github.com/search/repositories?q=user:${username2}`
);
const promise3 = fetch(
  `https://api.github.com/search/repositories?q=user:${username3}`
);
// render the fullname of the repo, url of the repo, and the owner of the repo
function renderData(data) {
  const mainDiv = document.getElementById("repositories");
  const userName = document.createElement("h2");
  mainDiv.appendChild(userName);
  userName.innerHTML = data.innerHTML = data.items[0].owner.login;
  data.items.forEach((item) => {
    const ul = document.createElement("ul");
    ul.innerHTML = `<li>Name: ${item.name}</li>
               <li>Url: <a href="${item.url}">${item.url}</a></li>
               <li>Owner: ${item.owner.login}</li>`;
    mainDiv.appendChild(ul);
  });
}
Promise.all([promise1, promise2, promise3])
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  .then((values) => values.forEach((data) => renderData(data)))
  .catch((error) => console.log(error));
