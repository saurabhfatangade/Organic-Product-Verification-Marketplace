import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");

        setProducts(response.data.products || response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Loading products...</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "50px 30px",
        background: "#f7faf7",
        minHeight: "80vh",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#2E7D32", fontSize: "36px" }}>
          Organic Products
        </h1>

        <p style={{ color: "#666" }}>
          Discover trusted and verified organic products.
        </p>
      </div>

      {products.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <h2>No products available.</h2>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "25px",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    fontSize: "50px",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                >
                  🌱
                </div>

                <h2 style={{ color: "#2E7D32" }}>
                  {product.name}
                </h2>

                <p style={{ color: "#666" }}>
                  {product.description}
                </p>

                <p>
                  <strong>Category:</strong> {product.category}
                </p>

                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#2E7D32",
                  }}
                >
                  ₹{product.price}
                </p>

                <div
                  style={{
                    color: "#2E7D32",
                    fontWeight: "bold",
                    marginTop: "15px",
                  }}
                >
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;