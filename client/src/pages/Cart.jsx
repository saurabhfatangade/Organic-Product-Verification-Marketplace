import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(
      (product) => product.id !== productId
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <>
          <p>Your cart is empty.</p>

          <Link to="/products">
            Browse Products
          </Link>
        </>
      ) : (
        cart.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "10px",
            }}
          >
            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <p>
              <strong>Price:</strong> ₹{product.price}
            </p>

            <button
              onClick={() =>
                removeFromCart(product.id)
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;