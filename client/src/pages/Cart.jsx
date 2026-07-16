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

  const totalPrice = cart.reduce(
    (total, product) => total + Number(product.price || 0),
    0
  );

  return (
    <div
      style={{
        background: "#f7faf7",
        minHeight: "80vh",
        padding: "50px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#2E7D32",
            marginBottom: "30px",
          }}
        >
          🛒 Your Cart
        </h1>

        {cart.length === 0 ? (
          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <h2>Your cart is empty</h2>

            <p>
              Add some organic products to your cart.
            </p>

            <Link
              to="/products"
              style={{
                display: "inline-block",
                background: "#2E7D32",
                color: "white",
                padding: "12px 20px",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            {cart.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "white",
                  padding: "25px",
                  marginBottom: "20px",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                }}
              >
                <div>
                  <h2 style={{ color: "#2E7D32" }}>
                    {product.name}
                  </h2>

                  <p>{product.description}</p>

                  <strong>
                    ₹{product.price}
                  </strong>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(product.id)
                  }
                  style={{
                    background: "#d32f2f",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}

            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                textAlign: "right",
              }}
            >
              <h2>
                Total: ₹{totalPrice}
              </h2>

              <button
                style={{
                  background: "#2E7D32",
                  color: "white",
                  border: "none",
                  padding: "14px 30px",
                  borderRadius: "6px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  alert("Checkout coming soon!")
                }
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;