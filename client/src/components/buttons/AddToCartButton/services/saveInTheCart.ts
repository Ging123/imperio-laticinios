interface productData {
  description:string;
  name:string;
  price:number;
}

export default function saveInTheCard(product:productData) {
  if(productWasAlredyAdded(product)) return;
  addProductToCard(product);
}

function productWasAlredyAdded(product:productData) {
  if(!existSomeProductInCard()) return false;
  const allProducts = getAllProductsInCard();
  for(let i = 0; i < allProducts.length; i++) {
    if(allProducts[i].name === product.name) return true;
  }
  return false;
}

function getAllProductsInCard() {
  const cardStr = localStorage.getItem('card');
  if(!cardStr) return false;
  const products = JSON.parse(cardStr);
  return products
}

function addProductToCard(product:productData) {
  if(existSomeProductInCard()) return addANewProduct(product); 
  addFirstProductInTheCard(product);
}

function existSomeProductInCard() {
  const cardWasFound = localStorage.getItem('card');
  if(cardWasFound) return true
  return false;
}

function addANewProduct(product:productData) {
  const card = getAllProductsInCard();
  card.push(product);
  updateCard(card)
}

function updateCard(newCard:any) {
  newCard = JSON.stringify(newCard)
  localStorage.removeItem('card');
  localStorage.setItem('card', newCard);
}

function addFirstProductInTheCard(product:productData) {
  const card = [product]
  const str_card = JSON.stringify(card);
  localStorage.setItem('card', str_card);
}