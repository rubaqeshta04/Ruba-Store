const renderProduct = (product) => {
  console.log(
    "ruba",
    product,
    product.id,
    product.price,
    product.category,
    product.Content,
    product.imgProduct
  );
  const cardProduct = document.getElementById("cardProduct");
  const card = document.createElement("div");
  card.classList.add(
    "w-full",
    "flex",
    "justify-start",
    "items-start",
    "p-10",
    "h-[700px]",
    "mb-[100px]",
    "gap-10"
  );
  cardProduct.appendChild(card);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("w-1/2", "overflow-hidden");
  card.appendChild(imgContainer);

  const img = document.createElement("img");
  img.src = product.imgProduct;
  imgContainer.appendChild(img);
  img.classList.add("h-[700px]");

  const cardContent = document.createElement("div");
  cardContent.classList.add(
    "w-1/2",
    "px-10",
    "flex",
    "justify-between",
    "flex-col",
    "items-start",
    "h-[700px]",
    "py-[70px]"
  );

  const mainContent = document.createElement("div");
  cardContent.appendChild(mainContent);
  card.appendChild(mainContent);

  const cardNavigation = document.createElement("p");
  cardNavigation.classList.add("pb-6");
  mainContent.appendChild(cardNavigation);
  cardNavigation.textContent = `All Products/ products/ ${product.title}`;

  const contentBody = document.createElement("div");
  contentBody.classList.add("flex", "justify-between", "items-center");
  mainContent.appendChild(contentBody);

  const cardTitle = document.createElement("p");
  contentBody.classList.add(
    "text-4xl",
    "font-medium",
    "pb-5",
    "text-[#5963f8]"
  );
  contentBody.appendChild(cardTitle);
  cardTitle.textContent = product.title;

  const cardPrice = document.createElement("div");
  cardPrice.classList.add("flex", "justify-between", "items-center", "gap-5");
  contentBody.appendChild(cardPrice);

  const oldPrice = document.createElement("p");
  oldPrice.classList.add(
    "text-xl",
    "font-medium",
    "text-red-600",
    "line-through"
  );
  cardPrice.appendChild(oldPrice);
  oldPrice.textContent = "$495";

  const newPrice = document.createElement("p");
  newPrice.classList.add("text-2xl", "font-medium", "text-green-600");
  cardPrice.appendChild(newPrice);
  newPrice.textContent = `$${product.price}`;

  const cardDesc = document.createElement("p");
  cardDesc.classList.add("text-xl", "font-semibold", "pb-5");
  mainContent.appendChild(cardDesc);
  cardDesc.textContent = product.Content;
  cardDesc.classList.add("text-xl", "font-smibold", "pb-5");

  const cardCategory = document.createElement("p");
  cardDesc.classList.add("text-xl", "font-semibold", "pb-5");
  mainContent.appendChild(cardCategory);
  cardCategory.textContent = "Category: ";
  cardCategory.classList.add("text-2xl", "font-smibold", "mb-[70px]");

  const categorySpan = document.createElement("span");
  categorySpan.textContent = product.category;
  categorySpan.classList.add("font-bold");
  cardCategory.appendChild(categorySpan);

  const cardButton = document.createElement("button");
  cardButton.classList.add(
    "bg-black",
    "px-10",
    "py-3",
    "border-2",
    "rounded-sm",
    "font-semibold",
    "text-[#fff]",
    "mt-[50px]",
    "hover:bg-[#fbcfe8]",
    "hover:text-[#000]"
  );
  mainContent.appendChild(cardButton);
  cardButton.textContent = "Add to cart";
};

const clickedId = JSON.parse(localStorage.getItem("clickedId"));
const products = JSON.parse(localStorage.getItem("products"));
const productsArr = Array.from(products);
productsArr.forEach(
  (product) => clickedId == product.id && renderProduct(product)
);
