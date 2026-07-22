import { Link } from "react-router-dom";
import greenImage from "../assets/green.png";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
         backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${greenImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "120px 30px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "white",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Trust Every Organic Product
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#f5f5f5",
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
            fontWeight: "bold",
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
            fontWeight: "bold",
          }}
        >
          View My Orders
        </Link>
      </section>

      {/* Features Section */}
      <section
        style={{
          padding: "60px 30px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#2E7D32",
            fontSize: "36px",
            marginBottom: "40px",
          }}
        >
          Why Choose OrganicVerify?
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "280px",
              padding: "25px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              background: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3>✅ Verified Products</h3>

            <p>
              Products are verified for authenticity before listing.
            </p>
          </div>

          <div
            style={{
              width: "280px",
              padding: "25px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              background: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3>🌱 Organic Focus</h3>

            <p>
              Buy natural and trusted organic products with confidence.
            </p>
          </div>

          <div
            style={{
              width: "280px",
              padding: "25px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              background: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3>🛒 Easy Shopping</h3>

            <p>
              Search, filter, add to cart and order products easily.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;