import React from "react";
function Cart(){
  return(
    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Online Shopping Cart</title>
        <header>
          <h1>Online Shopping Cart</h1>
        </header>
        <div className="container">
          <div className="product-list">
            <div className="product-card">
              <img src="product1.jpg" alt="Product 1" />
              <h2>Product 1</h2>
              <p>Price: $20</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="product2.jpg" alt="Product 2" />
              <h2>Product 2</h2>
              <p>Price: $30</p>
              <button>Add to Cart</button>
            </div>
            {/* Add more product cards as needed */}
          </div>
          <div className="cart">
            <h2>Shopping Cart</h2>
            <div className="cart-item">
              <img src="product1.jpg" alt="Product 1" />
              <div>
                <h3>Product 1</h3>
                <p>Price: $20</p>
              </div>
              <button>Remove</button>
            </div>
            <div className="cart-item">
              <img src="product2.jpg" alt="Product 2" />
              <div>
                <h3>Product 2</h3>
                <p>Price: $30</p>
              </div>
              <button>Remove</button>
            </div>
            {/* Add more cart items as needed */}
            <div className="total">Total: $50</div>
          </div>
        </div>
        <footer>
          © 2023 Your Online Store. All rights reserved.
        </footer>
      </div>
  );
}
export default Cart;