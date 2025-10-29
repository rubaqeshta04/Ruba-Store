const renderProduct = (product) => {
  const cardProduct = document.getElementById("cardProduct");

  const card = document.createElement("div");
  card.className =
    "flex flex-col md:flex-row justify-start items-start gap-6 p-4 md:p-10 mb-10 border rounded-md shadow-sm";

  // Image Container
  const imgContainer = document.createElement("div");
  imgContainer.className = "w-full md:w-1/2 overflow-hidden";
  const img = document.createElement("img");
  img.src = product.imgProduct;
  img.className = "w-full h-64 md:h-[500px] object-cover rounded-md";
  imgContainer.appendChild(img);
  card.appendChild(imgContainer);

  // Content Container
  const content = document.createElement("div");
  content.className =
    "w-full md:w-1/2 flex flex-col justify-between px-0 md:px-10 mt-4 md:mt-0";

  // Breadcrumb
  const breadcrumb = document.createElement("p");
  breadcrumb.className = "text-sm text-gray-500 pb-2";
  breadcrumb.textContent = `All Products / ${product.title}`;
  content.appendChild(breadcrumb);

  // Title
  const title = document.createElement("h2");
  title.className = "text-2xl md:text-4xl font-semibold text-[#5963f8] pb-4";
  title.textContent = product.title;
  content.appendChild(title);

  // Price
  const priceDiv = document.createElement("div");
  priceDiv.className = "flex items-center gap-4 pb-4";
  const oldPrice = document.createElement("p");
  oldPrice.className = "text-red-600 line-through text-lg md:text-xl";
  oldPrice.textContent = "$495";
  const newPrice = document.createElement("p");
  newPrice.className = "text-green-600 font-medium text-xl md:text-2xl";
  newPrice.textContent = `$${product.price}`;
  priceDiv.appendChild(oldPrice);
  priceDiv.appendChild(newPrice);
  content.appendChild(priceDiv);

  // Description
  const desc = document.createElement("p");
  desc.className = "text-base md:text-xl font-medium pb-4";
  desc.textContent = product.Content;
  content.appendChild(desc);

  // Category
  const category = document.createElement("p");
  category.className = "text-base md:text-lg pb-6";
  category.innerHTML = `Category: <span class="font-bold">${product.category}</span>`;
  content.appendChild(category);

  // Button
  const button = document.createElement("button");
  button.className =
    "bg-black text-white font-semibold px-6 py-2 rounded hover:bg-[#fbcfe8] hover:text-black transition";
  button.textContent = "Add to cart";
  button.addEventListener("click", () => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    cartProducts.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  });
  content.appendChild(button);

  card.appendChild(content);
  cardProduct.appendChild(card);
};

const Products = JSON.parse(localStorage.getItem("products")) || [];
const idProduct = JSON.parse(localStorage.getItem("idProduct")) || [];
const filteredProduct = Products.filter((Product) => Product.id == idProduct);
renderProduct(filteredProduct[0]);
