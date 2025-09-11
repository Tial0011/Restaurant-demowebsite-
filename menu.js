const foods = document.querySelectorAll(".afood");
const crt = document.querySelector(".crtbtn");
foods.forEach((food) => {
  const minusBtn = food.querySelector(".minus");
  const plusBtn = food.querySelector(".plus");
  const qtyDiv = food.querySelector(".quantity");
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
