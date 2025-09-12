const card = document.querySelector(".afood");
const menuData = [
  {
    id: 1,
    name: "Pounded Yam And Efo",
    price: 2000,
  },
  {
    id: 2,
    name: "Fried Rice",
    price: 1500,
  },
  {
    id: 3,
    name: "Jollof Rice",
    price: 1800,
  },
  {
    id: 4,
    name: "Amala and Ewedu",
    price: 1800,
  },
  {
    id: 5,
    name: "Semo and Efo",
    price: 1800,
  },
];
const menuContainer = document.querySelector(".foods");
menuData.forEach((item, index) => {
  let newCard = index === 0 ? card : card.cloneNode(true);
  if (index > 0) menuContainer.appendChild(newCard);
  newCard.querySelector(".info").childNodes[0].textContent = item.name + "\n";
  newCard.querySelector(".price").childNodes[0].textContent = `₦${item.price}`;
  newCard.querySelector("img").src = `images/${item.id}.jpg`;
});
const foods = document.querySelectorAll(".afood");
const crt = document.querySelector(".crtbtn");
foods.forEach((food) => {
  const minusBtn = food.querySelector(".minus");
  const plusBtn = food.querySelector(".plus");
  const qtyDiv = food.querySelector(".quantity");
  const crt = food.querySelector(".crtbtn");
  let qty = parseInt(qtyDiv.textContent);
  plusBtn.addEventListener("click", () => {
    qty++;
    qtyDiv.textContent = qty;
  });
  minusBtn.addEventListener("click", () => {
    if (qty > 0) qty--;
    qtyDiv.textContent = qty;
  });
  crt.addEventListener("click", () => {
    qty++;
    qtyDiv.textContent = qty;
  });
});
