export default function getCardData() {
  const cardStr = localStorage.getItem("card");
  if(!cardStr) return [];
  const card = JSON.parse(cardStr);
  return card;
}