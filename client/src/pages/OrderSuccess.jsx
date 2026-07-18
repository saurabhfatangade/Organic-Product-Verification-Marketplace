import { Link, useLocation } from "react-router-dom";

function OrderSuccess() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        background: "#f7faf7",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "50px 30px",
          borderRadius: "15px",
          textAlign: "center",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ fontSize: "70px" }}>
          ✅
        </div>

        <h1
          style={{
            color: "#2E7D32",
            marginTop: "20px",
          }}
        >
          Order Placed Successfully!
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Thank you for shopping with OrganicVerify.
          Your order has been received successfully.
        </p>

        <p
          style={{
            background: "#E8F5E9",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          📦 Your order is being processed.
        </p>

        <Link
          to="/products"
          style={{
            display: "inline-block",
            marginTop: "25px",
            background: "#2E7D32",
            color: "white",
            padding: "14px 25px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;