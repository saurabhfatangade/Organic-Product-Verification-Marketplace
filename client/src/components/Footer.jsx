function Footer() {
  return (
    <footer
      style={{
        background: "#1B5E20",
        color: "white",
        padding: "40px 30px 20px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Brand */}
        <div style={{ maxWidth: "300px" }}>
          <h2>🌱 OrganicVerify</h2>

          <p>
            Discover trusted and verified organic products
            from reliable sellers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>

          <p>Home</p>
          <p>Products</p>
          <p>Cart</p>
        </div>

        {/* Contact */}
        <div>
          <h3>Contact</h3>

          <p>📧 support@organicverify.com</p>
          <p>📍 India</p>
        </div>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(255,255,255,0.3)",
          margin: "30px 0 20px",
        }}
      />

      <p
        style={{
          textAlign: "center",
          margin: 0,
        }}
      >
        © 2026 Organic Product Verification Marketplace
      </p>
    </footer>
  );
}

export default Footer;