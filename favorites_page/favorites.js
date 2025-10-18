const favorites = JSON.parse(localStorage.getItem("products")) || [];

const filteredFavorites = favorites.filter((favorite) => favorite.isFavorite);

const filteredFavoritesArray = Array.from(favorites);
filteredFavoritesArray.forEach((favoriteItem) => {
  const cards = document.getElementById("cards");
  const cardProduct = document.createElement("div");
  cardProduct.classList.add(
    "flex",
    "flex-col",
    "items-start",
    "justify-between",
    "pb-5",
    "basis-[250px]",
    "min-h-[400px]",
    "border-2"
  );
  cards.appendChild(cardProduct);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("overflow-hidden", "h-[350px]", "w-full");
  cardProduct.appendChild(imgContainer);

  const imgProduct = document.createElement("img");
  imgProduct.classList.add("h-[350px]", "w-full", "object-cover");
  imgContainer.appendChild(imgProduct);
  imgProduct.src = "../images/bag2.jpg";

  const content = document.createElement("div");
  content.classList.add(
    "flex",
    "items-end",
    "justify-between",
    "w-full",
    "px-5"
  );
  cardProduct.appendChild(content);
  const contentbody = document.createElement("div");
  content.appendChild(contentbody);

  const titleProduct = document.createElement("p");
  titleProduct.classList.add("font-semibold", "text-lg", "pb-3", "pt-5");
  titleProduct.textContent = favoriteItem.title;
  contentbody.appendChild(titleProduct);

  const oldProduct = document.createElement("p");
  oldProduct.classList.add(
    "text-sm",
    "font-medium",
    "text-red-600",
    "line-through"
  );
  oldProduct.textContent = "$495";
  contentbody.appendChild(oldProduct);

  const newProduct = document.createElement("p");
  newProduct.classList.add("text-lg", "font-medium", "text-green-600");
  newProduct.textContent = `$${favoriteItem.price}`;
  contentbody.appendChild(newProduct);

  const favoriteIcon = document.createElement("img");
  favoriteIcon.src = "../images/heart-icon.png";
  favoriteIcon.classList.add("w-[30px]");
  content.appendChild(favoriteIcon);
});
