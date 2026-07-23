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
      <section
  style={{
    background: "#2E7D32",
    color: "white",
    padding: "60px 30px",
    marginTop: "40px",
  }}
>
  <h2
    style={{
      textAlign: "center",
      marginBottom: "40px",
    }}
  >
    OrganicVerify in Numbers
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "30px",
      textAlign: "center",
    }}
  >
    <div>
      <h1>500+</h1>
      <p>Verified Products</p>
    </div>

    <div>
      <h1>150+</h1>
      <p>Trusted Sellers</p>
    </div>

    <div>
      <h1>2000+</h1>
      <p>Happy Customers</p>
    </div>

    <div>
      <h1>98%</h1>
      <p>Customer Satisfaction</p>
    </div>
  </div>
</section>
<section
  style={{
    padding: "60px 30px",
    textAlign: "center",
  }}
>
  <h2>Why Customers Trust Us</h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "25px",
      marginTop: "35px",
    }}
  >
    <div style={{ width: "260px" }}>
      <h3>🔒 Secure Shopping</h3>
      <p>Your information is handled securely.</p>
    </div>

    <div style={{ width: "260px" }}>
      <h3>🚚 Fast Delivery</h3>
      <p>Quick delivery of verified organic products.</p>
    </div>

    <div style={{ width: "260px" }}>
      <h3>🌿 Certified Organic</h3>
      <p>Products are verified before being listed.</p>
    </div>
  </div>
</section>
<footer
  style={{
    background: "#1B5E20",
    color: "white",
    marginTop: "50px",
    padding: "50px 30px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(250px,1fr))",
      gap: "30px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    {/* About */}
    <div>
      <h2>OrganicVerify</h2>

      <p>
        OrganicVerify helps customers find
        genuine organic products from trusted
        sellers with complete transparency.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3>Quick Links</h3>

      <p>🏠 Home</p>

      <p>🛍 Products</p>

      <p>🛒 Cart</p>

      <p>📦 Orders</p>
    </div>

    {/* Contact */}
    <div>
      <h3>Contact</h3>

      <p>📧 support@organicverify.com</p>

      <p>📞 +91 9876543210</p>

      <p>📍 Maharashtra, India</p>
    </div>
  </div>

  <hr
    style={{
      margin: "30px 0",
      borderColor: "#4CAF50",
    }}
  />

  <p
    style={{
      textAlign: "center",
      margin: 0,
    }}
  >
    © 2026 OrganicVerify. All Rights Reserved.
  </p>
</footer>
    </div>

    
  );
}

export default Home;