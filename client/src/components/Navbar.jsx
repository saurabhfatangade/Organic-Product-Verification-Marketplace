import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Navbar() {
  const savedUser = localStorage.getItem("user");
const { cart } = useContext(CartContext);

const totalItems = cart.reduce(
  (total, item) => total + (item.quantity || 1),
  0
);
  const user = savedUser
    ? JSON.parse(savedUser)
    : null;

  const handleLogout = () => {
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");

  alert("Logged out successfully.");

  window.location.href = "/";
};

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e5e5",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#2E7D32",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        🌱 OrganicVerify
      </Link>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Home
        </Link>

        <Link
          to="/products"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Products
        </Link>

        <Link
  to="/cart"
  style={{
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  }}
>
  🛒 Cart ({totalItems})
</Link>
        <Link to="/orders">
  Orders
</Link>
<Link to="/wishlist">
  ❤️ Wishlist
</Link>

        {user ? (
          <>
            <span style={{ color: "#2E7D32" }}>
              Welcome, {user.name}
            </span>
            

            <button
              onClick={handleLogout}
              style={{
                border: "none",
                background: "#2E7D32",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#333",
              }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{
                background: "#2E7D32",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Register
            </Link>
          </>

          
        )}
      </div>
    </nav>
  );
}

export default Navbar;