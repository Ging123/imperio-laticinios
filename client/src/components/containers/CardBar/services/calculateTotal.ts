export default function calculateTotal() {
  const quantityOfProducts = getQuantityOfProductsRegister();
  const totalPrice = calculateTotalPrice(quantityOfProducts);
  putTotalPriceInHtml(totalPrice);
}

function getQuantityOfProductsRegister() {
  const quantityContainers = document.getElementsByClassName('product-price');
  return quantityContainers.length;
}

function calculateTotalPrice(quantityOfProducts:number) {
  let total = 0;
  for(let i = 0; i < quantityOfProducts; i++) {
    const quantityToBuy = getQuantityToBuyOfAProduct(i);
    const price = getPriceOfAProduct(i);
    total += quantityToBuy * price;
  }
  return total;
}

function putTotalPriceInHtml(totalPrice:number) {
  const element = document.getElementById('total-value')!;
  element.textContent = `${totalPrice}R$`;
}

function getQuantityToBuyOfAProduct(index:number) {
  const className = 'product-quantity'
  const quantityElement = document.getElementsByClassName(className)[index];
  return parseInt(quantityElement.textContent!);
}

function getPriceOfAProduct(index:number) {
  const productElement = document.getElementsByClassName('product-price')[index];
  return parseFloat(productElement.textContent!);
}