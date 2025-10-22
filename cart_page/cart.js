let cartProductsArray = JSON.parse(localStorage.getItem("cartProducts")) || [];

const updateCartData = () => {
  localStorage.setItem("cartProducts", JSON.stringify(cartProductsArray));
};

const deleteFromCart = (productId) => {
  cartProductsArray = cartProductsArray.filter(
    (cartProduct) => cartProduct.id !== productId
  );
  updateCartData();
  renderCartProducts();
};

const renderCartProducts = () => {
  const cartProductsContainer = document.getElementById(
    "cartProductsContainer"
  );

  cartProductsContainer.innerHTML = "";

  if (cartProductsArray.length === 0) {
    cartProductsContainer.innerHTML =
      '<p class="text-center text-gray-500">Cart Is Empty</p>';
    return;
  }

  cartProductsArray.forEach((product) => {
    const mainContainer = document.createElement("div");
    mainContainer.className =
      "flex justify-start items-center w-full bg-white p-4 rounded-lg shadow-sm mb-4";

    const imageContainer = document.createElement("div");
    imageContainer.className = "w-[300px]";
    const productImage = document.createElement("img");
    productImage.src = product.imgProduct;
    productImage.alt = product.title;
    productImage.className = "w-full h-auto object-cover rounded";
    imageContainer.appendChild(productImage);

    const contentContainer = document.createElement("div");
    contentContainer.className =
      "flex justify-between items-start flex-col w-full gap-5 p-5";

    const headerContainer = document.createElement("div");
    headerContainer.className = "flex justify-between items-start w-full";

    const productTitle = document.createElement("h3");
    productTitle.className = "font-bold text-lg";
    productTitle.textContent = product.title;

    const deleteIcon = document.createElement("img");
    deleteIcon.src = "../images/delete-icon.svg";
    deleteIcon.alt = "Delete";
    deleteIcon.className =
      "w-[30px] cursor-pointer hover:opacity-70 transition-opacity";

    deleteIcon.addEventListener("click", () => deleteFromCart(product.id));

    headerContainer.appendChild(productTitle);
    headerContainer.appendChild(deleteIcon);

    const productDescription = document.createElement("p");
    productDescription.className = "font-normal text-lg text-gray-600";
    productDescription.textContent = product.Content;

    const footerContainer = document.createElement("div");
    footerContainer.className = "flex justify-end items-center w-full gap-5";

    const quantityContainer = document.createElement("div");
    quantityContainer.className = "flex justify-between items-center gap-3";

    const minusButton = document.createElement("button");
    minusButton.className =
      "text-2xl bg-gray-200 w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-gray-300 transition-colors";
    minusButton.textContent = "-";

    const quantity = document.createElement("p");
    quantity.className = "font-bold text-2xl min-w-[20px] text-center";
    quantity.textContent = product.quantity || "1";

    const plusButton = document.createElement("button");
    plusButton.className =
      "text-2xl bg-gray-200 w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-gray-300 transition-colors";
    plusButton.textContent = "+";

    quantityContainer.appendChild(minusButton);
    quantityContainer.appendChild(quantity);
    quantityContainer.appendChild(plusButton);

    const price = document.createElement("p");
    price.className = "font-bold text-2xl text-green-600";
    price.textContent = `$${product.price}`;

    footerContainer.appendChild(quantityContainer);
    footerContainer.appendChild(price);

    contentContainer.appendChild(headerContainer);
    contentContainer.appendChild(productDescription);
    contentContainer.appendChild(footerContainer);

    mainContainer.appendChild(imageContainer);
    mainContainer.appendChild(contentContainer);

    cartProductsContainer.appendChild(mainContainer);
  });
};

renderCartProducts();
