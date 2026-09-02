const myArray = [
  { productName: "Batman: Arkham Knight Edition", price: "$34.99", image: "assets/batman.jpg" },
  { productName: "Darth Vader: Dark Lord Edition", price: "$42.99", image: "assets/darthvader.jpg" },
  { productName: "Doctor Strange: Master of Mystic Arts", price: "$34.99", image: "assets/drstrange.jpg" },
  { productName: "The Flash: Speed Force Figure", price: "$31.99", image: "assets/flash.jpg" }
];

let cardsHTML = ""; // cards as strings

for (let i = 0; i < myArray.length; i++) {
  cardsHTML += `
    <div class="card">
      <a href="productpage.html">
        <img src="${myArray[i].image}" alt="${myArray[i].productName}">
        <h3>${myArray[i].productName}</h3>
        <p>${myArray[i].price}</p>
      </a>
      <button type="button">Add to cart 🛒</button>
      <button type="button" class="buy-btn">Buy</button>
    </div>
  `;
}

document.getElementById("card-grid").innerHTML = cardsHTML;



