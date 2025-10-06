const addProduct = document.getElementById("add-product");
const isSeller = JSON.parse(localStorage.getItem("isSeller"));

isSeller
  ? (addProduct.style.display = "flex")
  : (addProduct.style.display = "none");

const addProductModal = document.getElementById("add-product-modal");
const closeAddTodoModal = document.getElementById("closeAddTodoModal");
const cardsContainer = document.getElementById("cards");
addProduct.addEventListener("click", () => {
  addProductModal.style.display = "flex";
});

closeAddTodoModal.addEventListener("click", () => {
  addProductModal.style.display = "none";
});

const addProductform = document.getElementById("add-product-form");
const products = JSON.parse(localStorage.getItem("products")) || [];

addProductform.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const title = formData.get("title");
  const price = formData.get("price");
  const imgProduct = formData.get("img-product");
  const category = formData.get("category");
  const Content = formData.get("Content");

  const product = {
    title,
    price,
    imgProduct,
    category,
    Content,
    id: Date.now(),
  };

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  e.target.reset();
  renderCards();
  addProductModal.style.display = "none";
});

const cards = document.getElementById("cards");

const renderCards = () => {
  const productsArr = Array.from(products);
  productsArr.forEach((product) => {
    const card = document.createElement("div");

    card.classList.add(
      "flex",
      "flex-col",
      "items-start",
      "justify-between",
      "pb-5",
      "basis-[250px]",
      "min-h-[400px]",
      "border-2"
    );

    const cardImgContainer = document.createElement("div");
    cardImgContainer.classList.add("overflow-hidden", "h-[350px]", "w-full");
    card.appendChild(cardImgContainer);

    const cardImg = document.createElement("img");
    cardImg.classList.add("h-[350px]", "w-full", "object-cover");
    cardImg.src = product.imgProduct;
    cardImg.alt = "Bag";

    cardImgContainer.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add(
      "flex",
      "items-end",
      "justify-between",
      "w-full",
      "px-5"
    );
    card.appendChild(cardBody);

    const cardContent = document.createElement("div");
    cardBody.appendChild(cardContent);

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("font-semibold", "text-lg", "pb-3", "pt-5");
    cardTitle.textContent = product.title;
    const cardLink = document.createElement("a");
    cardContent.appendChild(cardLink);
    cardLink.href = "../product_page/index.html";
    cardLink.appendChild(cardTitle);

    const cardOldPrice = document.createElement("p");
    cardOldPrice.classList.add(
      "text-sm",
      "font-medium",
      "text-red-600",
      "line-through"
    );
    cardContent.appendChild(cardOldPrice);
    cardOldPrice.textContent = "$495";

    const cardNewPrice = document.createElement("p");
    cardNewPrice.classList.add("text-lg", "font-medium", "text-green-600");
    cardContent.appendChild(cardNewPrice);
    cardNewPrice.textContent = product.price;

    // 1. إنشاء الزر
    const button = document.createElement("button");
    button.classList.add("favoriteBtn", "focus:outline-none");

    // 2. إنشاء عنصر SVG
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("fill", "none");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("stroke", "currentColor");
    svg.classList.add(
      "heartIcon",
      "w-6",
      "h-6",
      "text-gray-400",
      "transition-colors",
      "duration-300"
    );

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("stroke-width", "2");
    path.setAttribute(
      "d",
      "M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
    );

    svg.appendChild(path);
    button.appendChild(svg);
    cardBody.appendChild(button);
    cardsContainer.appendChild(card);
  });
};

renderCards();

const productsCount = document.getElementById("productsCount");
const productsArr = Array.from(products);
productsCount.textContent = `${productsArr.length} products`;
