# Agronova: Agricultural E-Commerce Platform

Agronova is a comprehensive frontend prototype for an agricultural e-commerce platform designed to connect farmers directly with consumers. Built entirely with **HTML, CSS, and JavaScript**, this project simulates a complete marketplace experience. It uses the browser's `localStorage` to manage user accounts, product listings, and orders, providing a functional demonstration of the application flow without a backend.

## 🚀 Key Features

The platform supports two primary user roles with distinct functionalities:

### 🧑‍🌾 For Farmers

-   **Dashboard:** A central hub to manage products and view incoming orders.
-   **Product Management:** Add, view, edit, and delete products from their personal inventory.
-   **Order Fulfillment:** View a list of customer orders that match their registered location/pincode.
-   **Order Status Control:** Accept or reject incoming orders, updating the status for the customer.
-   **News & Updates:** Access a dedicated page with simulated market prices, weather forecasts, and farming video guides.

### 🛒 For Customers

-   **Product Discovery:** Browse a wide range of agricultural products sorted into clear categories:
    -   Vegetables
    -   Fruits
    -   Cereals
    -   Spices
    -   Pulses
    -   Dairy Products
    -   Leafy Vegetables
-   **Seamless Ordering:** Place orders directly from product pages by specifying quantity and location.
-   **Order Tracking:** View a complete history of all placed orders and monitor their real-time status (Pending, Accepted, Rejected).

## ⚙️ How It Works

This application is a frontend-only project that cleverly uses the browser's **`localStorage`** to simulate a database.

1.  **User Authentication:** New users can register as either a "Farmer" or a "Customer". Their credentials and role are saved in `localStorage`.
2.  **Order Placement:** When a customer places an order, the details (product, quantity, price, location) are stored as an "order" object in `localStorage`.
3.  **Location-Based Matching:** The farmer's order dashboard filters and displays only those orders where the customer's specified location matches the farmer's registered location.
4.  **State Management:** All interactions, such as placing an order or a farmer accepting it, update the data in `localStorage`, ensuring a persistent state across browser sessions.

## 🏁 Getting Started

To run this project locally, follow these simple steps:

1.  Clone or download the repository to your local machine.
2.  Navigate to the project directory.
3.  Open the `index.html` file in your preferred web browser.

### Example User Flow:

1.  **Register a Farmer:** Open `register.html` (or navigate from the homepage), select the "Farmer" role, and complete the form with a specific location (e.g., "500084").
2.  **Register a Customer:** Open a new private browser window, register as a "Customer".
3.  **Place an Order:** As the customer, log in, browse to a product (e.g., Fruits -> Apple), and place an order using the same location ("500084").
4.  **Fulfill the Order:** Log back in as the farmer and navigate to the "Orders" page from the dashboard. You will now see the customer's order and can choose to "Accept" or "Reject" it.
5.  **Check Status:** The customer can then view their "My Orders" page to see the updated status.
