const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const products = JSON.parse(localStorage.getItem("products")) || [];

const renderProducts = (container) => {
  const productsArray = Array.from(products).slice(0, 5);
  productsArray.forEach((product) => {
    const card = document.createElement("div");
    card.className =
      "flex flex-col items-start justify-between pb-5 basis-[250px] min-h-[400px] border-2 rounded-md overflow-hidden bg-white";

    const cardImg = document.createElement("img");
    cardImg.src = product.imgProduct;
    cardImg.alt = product.title;
    cardImg.className =
      "w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover";
    card.appendChild(cardImg);

    const cardContent = document.createElement("div");
    cardContent.className = "px-4 py-2 w-full";
    card.appendChild(cardContent);

    const cardTitle = document.createElement("p");
    cardTitle.textContent = product.title;
    cardTitle.className = "font-semibold text-lg pb-1";
    cardContent.appendChild(cardTitle);

    const cardOldPrice = document.createElement("p");
    cardOldPrice.textContent = "$495";
    cardOldPrice.className = "text-sm font-medium text-red-600 line-through";
    cardContent.appendChild(cardOldPrice);

    const cardNewPrice = document.createElement("p");
    cardNewPrice.textContent = product.price;
    cardNewPrice.className = "text-lg font-medium text-green-600";
    cardContent.appendChild(cardNewPrice);

    container.appendChild(card);
  });
};

renderProducts(document.getElementById("cardsContainer"));
renderProducts(document.getElementById("ratedCards"));
