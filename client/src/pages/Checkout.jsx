import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const totalPrice = cart.reduce(
    (total, product) =>
      total +
      Number(product.price || 0) *
        (product.quantity || 1),
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Checkout form submitted!");

    navigate("/order-success");
  };

  if (cart.length === 0) {
    return (
      <div
        style={{
          padding: "80px 30px",
          textAlign: "center",
        }}
      >
        <h1>Your cart is empty 🛒</h1>

        <p>Add products before checkout.</p>

        <Link to="/products">
          Browse Products
        </Link>
      </div>
    );
  }

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
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#2E7D32",
            marginBottom: "30px",
          }}
        >
          Checkout
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(0, 2fr) minmax(280px, 1fr)",
            gap: "30px",
          }}
        >
          {/* Customer Information */}

          <form
            onSubmit={handleSubmit}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
            }}
          >
            <h2>Customer Information</h2>

            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="4"
              style={inputStyle}
            />

            <input
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                background: "#2E7D32",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Place Order
            </button>
          </form>

          {/* Order Summary */}

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              height: "fit-content",
            }}
          >
            <h2>Order Summary</h2>

            {cart.map((product) => (
              <div
                key={product.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <span>
                  {product.name} ×{" "}
                  {product.quantity || 1}
                </span>

                <strong>
                  ₹
                  {Number(product.price) *
                    (product.quantity || 1)}
                </strong>
              </div>
            ))}

            <hr />

            <h2>
              Total: ₹{totalPrice}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "13px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "7px",
  fontSize: "16px",
  boxSizing: "border-box",
};

export default Checkout;