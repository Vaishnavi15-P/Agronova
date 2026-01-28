const productData = {
 Vegetables: [
        { name: "Tomato", price: 40, quantity: "10kg", image: "tomato.jpeg", availability: "Out of Stock" },
        { name: "Onion", price: 50, quantity: "15kg", image: "onion.jpeg", availability: "Out of Stock" },
        { name: "Brinjal", price: 40, quantity: "8kg", image: "brinjal.jpeg", availability: "Out of Stock" },
        { name: "Potato", price: 40, quantity: "10kg", image: "potato.jpeg", availability: "Out of Stock" },
        { name: "LadyFinger", price: 50, quantity: "15kg", image: "ladyfinger.jpeg", availability: "Out of Stock" },
        { name: "Carrot", price: 40, quantity: "8kg", image: "carrot.jpeg", availability: "Out of Stock" },
        { name: "Cauliflower", price: 40, quantity: "10kg", image: "cauliflower.jpeg", availability: "Out of Stock" },
        { name: "Cabbage", price: 50, quantity: "15kg", image: "cabbage.jpeg", availability: "Out of Stock" },
      ],
      Fruits: [
        { name: "Apple", price: 40, quantity: "10kg", image: "apple.jpeg", availability: "Out of Stock" },
        { name: "Banana", price: 50, quantity: "15kg", image: "banana.jpeg", availability: "Out of Stock" },
        { name: "Orange", price: 40, quantity: "8kg", image: "orange.jpeg", availability: "Out of Stock" },
        { name: "Strawberry", price: 40, quantity: "10kg", image: "strawberry.jpeg", availability: "Out of Stock" },
        { name: "Grapes", price: 50, quantity: "15kg", image: "grapes.jpeg", availability: "Out of Stock" },
        { name: "PineApple", price: 40, quantity: "8kg", image: "pineapple.jpeg", availability: "Out of Stock" },
        { name: "Pomegranate", price: 40, quantity: "10kg", image: "pomegranate.jpg", availability: "Out of Stock" },
        { name: "Mango", price: 50, quantity: "15kg", image: "cabbage.jpeg", availability: "Out of Stock" },
        { name: "Guava", price: 50, quantity: "15kg", image: "guava.jpeg", availability: "Out of Stock" },
        { name: "watermelon", price: 50, quantity: "15kg", image: "watermelon.jpeg", availability: "Out of Stock" },
      ],
      Spices: [
        { name: "Mirchi", price: 40, quantity: "10kg", image: "chilli.jpeg", availability: "Out of Stock" },
        { name: "Turmeric", price: 50, quantity: "15kg", image: "turmeric.jpeg", availability: "Out of Stock" },
        { name: "Cloves", price: 40, quantity: "10kg", image: "cloves.jpeg", availability: "Out of Stock" },
        { name: "Cardamom", price: 50, quantity: "15kg", image: "cardamom.jpeg", availability: "Out of Stock" },
        { name: "Black Pepper", price: 40, quantity: "8kg", image: "blackpepper.jpeg", availability: "Out of Stock" },
        { name: "Garlic", price: 40, quantity: "10kg", image: "garlic.jpeg", availability: "Out of Stock" },
        { name: "Mustard", price: 50, quantity: "15kg", image: "mustard.jpeg", availability: "Out of Stock" },
      ],
      Cereals: [
        { name: "Millet", price: 40, quantity: "10kg", image: "millet.jpeg", availability: "Out of Stock" },
        { name: "Wheat", price: 50, quantity: "15kg", image: "wheat.jpeg", availability: "Out of Stock" },
        { name: "Maize", price: 40, quantity: "10kg", image: "maize.jpeg", availability: "Out of Stock" },
        { name: "Rice", price: 50, quantity: "15kg", image: "rice.jpeg", availability: "Out of Stock" },
        { name: "Sorghum", price: 40, quantity: "8kg", image: "sorghum.jpeg", availability: "Out of Stock" },
        { name: "Barley", price: 40, quantity: "10kg", image: "barley.jpg", availability: "Out of Stock" },
      ],
      Pulses: [
        { name: "Green Lentils", price: 40, quantity: "10kg", image: "greengram.jpeg", availability: "Out of Stock" },
        { name: "Black Gram", price: 50, quantity: "15kg", image: "blackgram.jpeg", availability: "Out of Stock" },
        { name: "Chickpeas", price: 40, quantity: "10kg", image: "chana.jpeg", availability: "Out of Stock" },
        { name: "Peas", price: 50, quantity: "15kg", image: "pea.jpeg", availability: "Out of Stock" },
        { name: "Soybean", price: 40, quantity: "8kg", image: "soybean.jpeg", availability: "Out of Stock" },
        { name: "Yellow Lentils", price: 40, quantity: "10kg", image: "ylentils.jpeg", availability: "Out of Stock" },
        { name: "Red Lentils", price: 40, quantity: "10kg", image: "redgram.jpeg", availability: "Out of Stock" },
      ],
      "Dairy Products": [
        { name: "Milk", price: 40, quantity: "10kg", image: "milk.jpeg", availability: "Out of Stock" },
        { name: "Curd", price: 50, quantity: "15kg", image: "curd.jpeg", availability: "Out of Stock" },
        { name: "Butter", price: 40, quantity: "10kg", image: "butter.jpeg", availability: "Out of Stock" },
        { name: "Ghee", price: 50, quantity: "15kg", image: "ghee.jpeg", availability: "Out of Stock" },
      ],
      "Leafy Vegetables": [
        { name: "Spinach", price: 40, quantity: "10kg", image: "palak.jpeg", availability: "Out of Stock" },
        { name: "Fenugreek Leaves (Methi)", price: 50, quantity: "15kg", image: "methi.jpeg", availability: "Out of Stock" },
        { name: "Coriander (dhania)", price: 40, quantity: "10kg", image: "coriander.jpeg", availability: "Out of Stock" },
        { name: "Mint Leaves (Pudina)", price: 50, quantity: "15kg", image: "pudina.jpeg", availability: "Out of Stock" },
        { name: "Amaranth Leaves (Thotakura)", price: 40, quantity: "8kg", image: "thotakura.jpeg", availability: "Out of Stock" },
        { name: "Curry Leaves (Karvepaku)", price: 40, quantity: "10kg", image: "kar.jpeg", availability: "Out of Stock" },
        { name: "Gongura Leaves", price: 50, quantity: "15kg", image: "gongura.jpeg", availability: "Out of Stock" },
      ]
};

const productsList = document.getElementById("product-list");
let editingProductIndex = null;
let editedProduct = {};
let currentCategory = localStorage.getItem("selectedCategory"); // Retrieve the category

function renderProducts(category) {
  if (!category || !productData[category]) {
    productsList.innerHTML = "Category not found.";
    return;
  }

  productsList.innerHTML = "";
  productData[category].forEach((product, index) => {
    // ... (The renderProducts function from the previous example remains the same)
      const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        if (editingProductIndex === index) {
          productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <input type="number" name="price" value="${editedProduct.price}" onchange="handleInputChange(event)" />
            <input type="text" name="quantity" value="${editedProduct.quantity}" onchange="handleInputChange(event)" />
            <select name="availability" onchange="handleInputChange(event)">
              <option value="In Stock" ${editedProduct.availability === "In Stock" ? "selected" : ""}>In Stock</option>
              <option value="Out of Stock" ${editedProduct.availability === "Out of Stock" ? "selected" : ""}>Out of Stock</option>
            </select>
            <button class="product-save-btn" onclick="handleSave()">Save</button>
            <button class="product-cancel-btn" onclick="handleCancel()">Cancel</button>
          `;
        } else {
          productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-details">
              <div>Name: ${product.name}</div>
              <div>Price: $${product.price}</div>
              <div>Quantity: ${product.quantity}</div>
              <div>Availability: ${product.availability}</div>
            </div>
            <button class="product-edit-btn" onclick="handleEdit(${index})">Edit</button>
          `;
        }
        productsList.appendChild(productItem);
  });
}

function handleEdit(index) {
  editingProductIndex = index;
  editedProduct = { ...productData[currentCategory][index] };
  renderProducts(currentCategory);
}

function handleSave() {
  productData[currentCategory][editingProductIndex] = { ...editedProduct };
  editingProductIndex = null;
  renderProducts(currentCategory);
}

function handleCancel() {
  editingProductIndex = null;
  renderProducts(currentCategory);
}

function handleInputChange(event) {
  const { name, value } = event.target;
  editedProduct[name] = value;
}

renderProducts(currentCategory);