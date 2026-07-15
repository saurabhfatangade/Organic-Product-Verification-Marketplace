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
    return <h2 style={{ padding: "30px" }}>Loading products...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Organic Products</h1>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{
              display: "block",
              textDecoration: "none",
              color: "inherit",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <p>
                <strong>Category:</strong> {product.category}
              </p>

              <p>
                <strong>Price:</strong> ₹{product.price}
              </p>

              <p style={{ color: "green", fontWeight: "bold" }}>
                View Product Details →
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Products;