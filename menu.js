const card = document.querySelector(".foods");
const foods = document.querySelector(".afood");
const crt = document.querySelector(".crtbtn");
const menuData = [
  {
    id: 1,
    foodimage: "images/PoundedYam.jpg",
    title: "Pounded Yam",
    price: 2000,
  },
  {
    id: 2,
    foodimage: "images/FriedRice.jpg",
    title: "Fried Rice",
    price: 1500,
  },
  {
    id: 3,
    foodimage: "images/JollofRice.jpg",
    title: "Jollof Rice",
    price: 1800,
  },
  {
    id: 4,
    foodimage: "images/Amala.jpg",
    title: "Amala and Ewedu",
    price: 1800,
  },
  {
    id: 5,
    foodimage: "images/Semo.jpg",
    title: "Semo and Efo",
    price: 1800,
  },
];
card.innerHTML = menuData
  .map(
    (item) => `
        <div class="afood">
          <img src="${item.foodimage}" />
            <div class="info"><span class="titlename">${item.title}</span>
              <br />
              <div class="priceRow">
                  <span class="price">
                    ₦${item.price}
                  </span>
                   <div class="qtybtn">
                      <button class="minus">-</button>
                      <div class="quantity">0</div>
                      <button class="plus">+</button>
                   </div>
              </div>
              <div><button class="crtbtn">Add To Cart</button></div>
            </div>
        </div>
      `
  )
  .join("");
// let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.querySelectorAll(".afood").forEach((food) => {
  const qtyDiv = food.querySelector(".quantity");
  const plusBtn = food.querySelector(".plus");
  const minusBtn = food.querySelector(".minus");
  const price = food.querySelector(".price");
  const usedprice = Number(price.textContent.replace("₦", ""));
  const crtbtn = food.querySelector(".crtbtn");
  let qty = 0;
  plusBtn.addEventListener("click", () => {
    qty++;
    qtyDiv.textContent = qty;
    price.textContent = `₦${usedprice * qty}`;
  });
  minusBtn.addEventListener("click", () => {
    if (qty > 0) {
      qty--;
      qtyDiv.textContent = qty;
      if (qty != 0) price.textContent = `₦${usedprice * qty}`;
    }
  });
  crtbtn.addEventListener("click", () => {
    if (qty > 0) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const title = food.querySelector(".titlename").textContent.trim();
      const existing = cart.find((item) => item.title === title);
      if (existing) {
        existing.qty += qty;
      } else {
        cart.push({
          title: title,
          price: usedprice,
          qty: qty,
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      let addedmsg = document.createElement("span");
      addedmsg.textContent = "Added To Cart";
      addedmsg.classList.add("addedmsg");
      crtbtn.parentElement.appendChild(addedmsg);
      setTimeout(() => {
        addedmsg.remove();
      }, 1300);
    }
  });
});
