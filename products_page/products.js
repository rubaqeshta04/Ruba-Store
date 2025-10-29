const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});

const addProduct = document.getElementById("add-product");
const isSeller = JSON.parse(localStorage.getItem("isSeller"));
if (!isSeller) addProduct.style.display = "none";

const addProductModal = document.getElementById("add-product-modal");
const closeAddTodoModal = document.getElementById("closeAddTodoModal");
const cancelAddProduct = document.getElementById("cancelAddProduct");
const cardsContainer = document.getElementById("cards");

addProduct.addEventListener("click", () =>
  addProductModal.classList.remove("hidden")
);
closeAddTodoModal.addEventListener("click", () =>
  addProductModal.classList.add("hidden")
);
cancelAddProduct.addEventListener("click", () =>
  addProductModal.classList.add("hidden")
);

const addProductform = document.getElementById("add-product-form");
const products = JSON.parse(localStorage.getItem("products")) || [];

addProductform.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const product = {
    title: formData.get("title"),
    price: formData.get("price"),
    imgProduct: formData.get("img-product"),
    category: formData.get("category"),
    Content: formData.get("Content"),
    id: Date.now(),
    isFavorite: false,
  };
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  e.target.reset();
  renderCards();
  addProductModal.classList.add("hidden");
});

const renderProductsCount = () => {
  const productsCount = document.getElementById("productsCount");
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  productsCount.textContent = `${storedProducts.length} products`;
};

const renderCards = () => {
  cardsContainer.innerHTML = "";
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  storedProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className =
      "flex flex-col justify-between border-2 rounded-lg overflow-hidden basis-full sm:basis-[45%] md:basis-[30%] lg:basis-[23%] min-h-[400px] bg-white";

    const cardImgContainer = document.createElement("div");
    cardImgContainer.className =
      "w-full h-[250px] md:h-[300px] overflow-hidden";
    const cardImg = document.createElement("img");
    cardImg.src = product.imgProduct;
    cardImg.alt = product.title;
    cardImg.className = "w-full h-full object-cover";
    cardImgContainer.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.className = "p-4 flex flex-col gap-2";
    let idProduct = 0;
    const linkPage = document.createElement('a')
    const cardTitle = document.createElement("p");
    cardTitle.className = "font-semibold text-lg";
    linkPage.appendChild(cardTitle);
    linkPage.href = "../product_page/index.html"
    cardTitle.addEventListener("click", () => {
    idProduct =  product.id
    localStorage.setItem("idProduct", JSON.stringify(idProduct));
    
    });
  
    cardTitle.textContent = product.title;
    const cardPrice = document.createElement("p");
    cardPrice.className = "font-medium text-green-600 text-lg";
    cardPrice.textContent = `$${product.price}`;

    const favBtn = document.createElement("button");
    favBtn.className = "self-end focus:outline-none";
    const favIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    favIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    favIcon.setAttribute("fill", product.isFavorite ? "red" : "none");
    favIcon.setAttribute("viewBox", "0 0 24 24");
    favIcon.setAttribute("stroke", "currentColor");
    favIcon.classList.add(
      "w-6",
      "h-6",
      "stroke-current",
      product.isFavorite ? "text-red-600" : "text-gray-400"
    );
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("stroke-width", "2");
    path.setAttribute(
      "d",
      "M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
    );
    favIcon.appendChild(path);
    favBtn.appendChild(favIcon);

    favBtn.addEventListener("click", () => {
      const productsArr = JSON.parse(localStorage.getItem("products")) || [];
      const storedProduct = productsArr.find((p) => p.id === product.id);
      storedProduct.isFavorite = !storedProduct.isFavorite;
      localStorage.setItem("products", JSON.stringify(productsArr));
      renderCards();
    });

    cardBody.appendChild(linkPage);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(favBtn);
    

    card.appendChild(cardImgContainer);
    card.appendChild(cardBody);
    cardsContainer.appendChild(card);
  });
  renderProductsCount();
};

renderCards();
