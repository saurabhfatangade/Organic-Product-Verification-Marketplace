import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}

      
      <section
        style={{
          background: "#E8F5E9",
          padding: "80px 30px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            color: "#2E7D32",
            marginBottom: "20px",
          }}
        >
          Trust Every Organic Product
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto 30px",
          }}
        >
          Discover verified organic products from trusted sellers.
          Shop with confidence and transparency.
        </p>

        <Link
          to="/products"
          style={{
            display: "inline-block",
            background: "#2E7D32",
            color: "white",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          Explore Products
        </Link>

        <Link
  to="/orders"
  style={{
    display: "inline-block",
    marginLeft: "15px",
    padding: "14px 28px",
    background: "white",
    color: "#2E7D32",
    border: "1px solid #2E7D32",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "18px",
  }}
>
  View My Orders
</Link>
      </section>

      {/* Features Section */}
      <section
        style={{
          padding: "50px 30px",
          textAlign: "center",
        }}
      >
        <h2>Why Choose OrganicVerify?</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              width: "250px",
              padding: "25px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <h3>✅ Verified Products</h3>
            <p>
              Products are checked for organic authenticity.
            </p>
          </div>

          <div
            style={{
              width: "250px",
              padding: "25px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <h3>🌱 Organic Focus</h3>
            <p>
              Find natural and trustworthy organic products.
            </p>
          </div>

          <div
            style={{
              width: "250px",
              padding: "25px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <h3>🛒 Easy Shopping</h3>
            <p>
              Browse products and add them to your cart easily.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;