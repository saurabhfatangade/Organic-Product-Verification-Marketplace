import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartWithQuantity = savedCart.map((product) => ({
      ...product,
      quantity: product.quantity || 1,
    }));

    setCart(cartWithQuantity);
  }, []);

  const updateQuantity = (productId, change) => {
    const updatedCart = cart
      .map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + change,
          };
        }
const increaseQuantity = (id) => {
  const updatedCart = cart.map((item) =>
    item.id === id
      ? {
          ...item,
          quantity: (item.quantity || 1) + 1,
        }
      : item
  );

  setCart(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );
};

const decreaseQuantity = (id) => {
  const updatedCart = cart
    .map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(
              1,
              (item.quantity || 1) - 1
            ),
          }
        : item
    );

  setCart(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );
};

const removeItem = (id) => {
  const updatedCart = cart.filter(
    (item) => item.id !== id
  );

  setCart(updatedCart);

  localStorage.setItem(
    "cart",
    JSON.stringify(updatedCart)
  );
};
        return product;
      })
      .filter((product) => product.quantity > 0);

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

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
  (total, item) =>
    total +
    Number(item.price) *
      (item.quantity || 1),
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
                  gap: "20px",
                  flexWrap: "wrap",
                  boxShadow:
                    "0 3px 10px rgba(0,0,0,0.08)",
                }}
              >
                <div>
                  <h2 style={{ color: "#2E7D32" }}>
                    {product.name}
                  </h2>

                  <p>{product.description}</p>

                  <strong>
                    ₹{product.price} each
                    <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button
    onClick={() => decreaseQuantity(product.id)}
  >
    -
  </button>

  <strong>{product.quantity || 1}</strong>

  <button
    onClick={() => increaseQuantity(product.id)}
  >
    +
  </button>

  <button
    onClick={() => removeItem(product.id)}
    style={{
      marginLeft: "20px",
      color: "red",
    }}
  >
    Remove
  </button>
</div>
                  </strong>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <button
                    onClick={() =>
                      updateQuantity(product.id, -1)
                    }
                    style={{
                      width: "35px",
                      height: "35px",
                      border: "1px solid #ccc",
                      background: "white",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "18px",
                    }}
                  >
                    −
                  </button>

                  <strong>
                    {product.quantity}
                  </strong>

                  <button
                    onClick={() =>
                      updateQuantity(product.id, 1)
                    }
                    style={{
                      width: "35px",
                      height: "35px",
                      border: "1px solid #ccc",
                      background: "white",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "18px",
                    }}
                  >
                    +
                  </button>
                </div>

                <strong
                  style={{
                    color: "#2E7D32",
                    fontSize: "18px",
                  }}
                >
                  ₹
                  {Number(product.price) *
                    product.quantity}
                </strong>

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

       {cart.length > 0 ? (
  <Link to="/checkout">
    <button
      style={{
        padding: "12px 25px",
        background: "#2E7D32",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      Proceed to Checkout
    </button>
  </Link>
) : (
  <button
    disabled
    style={{
      padding: "12px 25px",
      background: "#ccc",
      color: "#666",
      border: "none",
      borderRadius: "8px",
      cursor: "not-allowed",
    }}
  >
    Cart is Empty
  </button>
)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;