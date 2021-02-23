console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
function renderProducts(products){
    const ulList = document.createElement('ul');
    document.body.appendChild(ulList);

for(let product of products) {
const liList = document.createElement("li");
ulList.appendChild(liList);
const h2Tag = document.createElement("h2");
h2Tag.innerHTML = product.name;
liList.appendChild(h2Tag);
const divTag = document.createElement("div");
divTag.innerHTML = `price: ${product.price}`;
liList.appendChild(divTag);
const divTag2 = document.createElement("div");
divTag2.innerHTML = `Rating: ${product.rating}`;
liList.appendChild(divTag2);
}
}
renderProducts(products);