<script>
	function buyNow(productName, price) {
	  const qtyInput = document.getElementById(`qty-${productName}`);
	  const locInput = document.getElementById(`loc-${productName}`);
  
	  const quantity = qtyInput.value;
	  const location = locInput.value;
  
	  if (!quantity || !location) {
		alert("Please enter both quantity and location.");
		return;
	  }
  
	  const newOrder = {
		product: productName,
		quantity: parseInt(quantity),
		location: location,
		status: "pending",
		price: price
	  };
  
	  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
	  existingOrders.push(newOrder);
	  localStorage.setItem("orders", JSON.stringify(existingOrders));
  
	  alert("✅ Order placed successfully!");
  
	  qtyInput.value = "";
	  locInput.value = "";
	}
  </script>