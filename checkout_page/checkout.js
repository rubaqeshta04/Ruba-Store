let checkoutProductsArray =
  JSON.parse(localStorage.getItem("cartProducts")) || [];

const filteredCheckoutArray = Array.from(checkoutProductsArray);
filteredCheckoutArray.forEach((cartProductItem) => {
  const checkoutCart = document.getElementById("checkoutCart");
  const mainDiv = document.createElement("div");
  mainDiv.classList.add(
    "gap-5",
    "flex",
    "justify-start",
    "items-start",
    "flex-col"
  );

  const productDiv = document.createElement("div");
  productDiv.classList.add(
    "flex",
    "justify-start",
    "items-center",
    "w-full",
    "gap-5"
  );

  const imageContainer = document.createElement("div");
  imageContainer.classList.add(
    "w-[170px]",
    "h-[120px]",
    "flex",
    "items-center",
    "justify-center",
    "border-2",
    "border-gray-300",
    "overflow-hidden"
  );

  const img = document.createElement("img");
  img.src = cartProductItem.imgProduct;
  img.alt = "";
  img.classList.add("h-[100%]");
  imageContainer.appendChild(img);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add(
    "flex",
    "justify-between",
    "items-start",
    "flex-col",
    "w-full",
    "h-[120px]"
  );

  const titleDiv = document.createElement("div");
  const nameP = document.createElement("p");
  nameP.classList.add("text-xl", "font-light");
  nameP.textContent = cartProductItem.title;

  const quantityP = document.createElement("p");
  quantityP.classList.add("text-xl", "font-light");
  quantityP.textContent = "1x";

  titleDiv.appendChild(nameP);
  titleDiv.appendChild(quantityP);

  const priceP = document.createElement("p");
  priceP.classList.add("text-xl", "font-light");
  priceP.textContent = `$${cartProductItem.price}`;

  infoDiv.appendChild(titleDiv);
  infoDiv.appendChild(priceP);

  productDiv.appendChild(imageContainer);
  productDiv.appendChild(infoDiv);

  mainDiv.appendChild(productDiv);
  checkoutCart.appendChild(mainDiv);

  const Subtotal = document.getElementById("Subtotal");
  const Total = document.getElementById("Total");
  let SubtotalValue = 0;
  filteredCheckoutArray.forEach((product) => {
    const productPrice = product.price;
    SubtotalValue = +SubtotalValue + +productPrice;
    Subtotal.textContent = `$${SubtotalValue}`;

   const TotalValue = SubtotalValue + 5;
    Total.textContent = `$${TotalValue}`;

    
  });
});
