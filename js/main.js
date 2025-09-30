const sellerBtn = document.getElementById('seller-btn');
const buyerBtn = document.getElementById('buyer-btn');

let isSeller = false;
sellerBtn.addEventListener('click' ,() => {
 isSeller = true;
 localStorage.setItem("isSeller", JSON.stringify(isSeller));
})

buyerBtn.addEventListener('click', () => {
 isSeller = false;
 localStorage.setItem("isSeller", JSON.stringify(isSeller));
})


