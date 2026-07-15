import { Link } from "react-router-dom";

function Navbar() {
  const savedUser = localStorage.getItem("user");

  const user = savedUser
    ? JSON.parse(savedUser)
    : null;

  const handleLogout = () => {
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#2E7D32",
        color: "white",
      }}
    >
      <h2>OrganicVerify</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Link
          to="/products"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Products
        </Link>

        <Link
          to="/cart"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          🛒 Cart
        </Link>

        {user ? (
          <>
            <span>
              Welcome, {user.name}
            </span>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{
                color: "white",
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