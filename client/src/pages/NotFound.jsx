import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div style={{ fontSize: "80px" }}>🌱</div>

      <h1
        style={{
          fontSize: "64px",
          color: "#2E7D32",
          margin: "10px 0",
        }}
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <p style={{ color: "#666" }}>
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        style={{
          marginTop: "20px",
          background: "#2E7D32",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;